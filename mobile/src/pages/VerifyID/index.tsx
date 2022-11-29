import React from 'react';
import {StatusBar} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {Camera} from 'react-native-vision-camera';

import * as C from './styles';
import {ParamList} from './@types';

const VerifyID: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {amount, name} = route.params;

  const openCamera = async (): Promise<void> => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    if (cameraPermission === 'authorized') {
      navigation.navigate('CameraView');
    } else {
      const newCameraPermission = await Camera.requestCameraPermission();

      if (newCameraPermission === 'authorized') {
        navigation.navigate('CameraView');
      }
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>Verificação facial</C.Title>
            <C.Message>
              Para a sua segurança, precisamos fazer uma verificação facial.
            </C.Message>
          </C.Scroll>
        </C.SafeArea>
        <C.ButtonWrapper>
          <C.Button onPress={openCamera}>
            <C.ButtonText>Verificar</C.ButtonText>
          </C.Button>
        </C.ButtonWrapper>
      </C.Container>
    </>
  );
};

export default VerifyID;
