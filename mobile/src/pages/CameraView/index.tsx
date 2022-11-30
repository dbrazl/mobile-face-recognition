import React, {useContext, useEffect, useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {Camera, PhotoFile, useCameraDevices} from 'react-native-vision-camera';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/dist/Feather';
import Toast from 'react-native-toast-message';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ParamList} from './@types';

import {Actions} from '../../state/user/@types/actions';
import {UserContext} from '../../state/user/state';

import * as C from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CameraView: React.FC = () => {
  const [checking, setChecking] = useState(false);

  const {state, dispatch} = useContext(UserContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {amount, name} = route.params;

  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [device, setDevice] = useState(devices.front);

  const transfetMoney = (to: string, value: number): void => {
    dispatch({
      type: Actions.TRANSFER_MONEY,
      payload: {
        to,
        value,
      },
    });
  };

  const verifyFace = async (photo: PhotoFile): Promise<void> => {
    const formData = new FormData();
    formData.append('file', RNFetchBlob.wrap(photo.path));

    try {
      const response = await RNFetchBlob.fetch(
        'POST',
        `http://localhost:5000/user/verify/face/${state.user.name}`,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'file',
            filename: 'file',
            type: 'image/jpg',
            data: RNFetchBlob.wrap(photo.path),
          },
        ],
      );

      const data = JSON.parse(response.data);

      if (data.passOnVerification && data.probability_percent >= 80) {
        transfetMoney(name, amount);
        navigation.navigate('TransferSuccess');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Falha na autentificação',
          text2: 'Você não é o usuário dessa conta!',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro!',
      });

      console.error(error);
    }

    setChecking(false);
  };

  const capturePhoto = async (): Promise<void> => {
    setChecking(true);

    const photo = await camera?.current?.takePhoto();

    if (photo) {
      await verifyFace(photo);
    }
  };

  const changeCamera = (): void => {
    if (device === devices.front) {
      setDevice(devices.back);
    } else {
      setDevice(devices.front);
    }
  };

  useEffect(() => {
    setDevice(devices.front);
  }, [devices]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <C.ChangeCamera onPress={changeCamera}>
        <Icon name="refresh-ccw" size={30} color="#fff" />
      </C.ChangeCamera>
      <C.Container>
        {device ? (
          <Camera
            ref={camera}
            style={{flex: 1}}
            device={device}
            isActive={true}
            photo
            enableHighQualityPhotos
          />
        ) : null}
        <C.ButtonWrapper>
          <C.CaptureButton onPress={capturePhoto}>
            <C.InternalCircle />
          </C.CaptureButton>
        </C.ButtonWrapper>
      </C.Container>
      {checking ? (
        <C.LoadingContainer>
          <C.Wrapper>
            <C.Loading size="large" color="#fff" />
            <C.Message>Estamos verificando o seu rosto...</C.Message>
            <C.Message>Aguarde!</C.Message>
          </C.Wrapper>
        </C.LoadingContainer>
      ) : null}
    </>
  );
};

export default CameraView;
