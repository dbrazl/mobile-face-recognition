import React, {useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {Camera, PhotoFile, useCameraDevices} from 'react-native-vision-camera';
import RNFetchBlob from 'rn-fetch-blob';

import * as C from './styles';

const CameraView: React.FC = () => {
  const [checking, setChecking] = useState(false);

  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.front;

  const verifyFace = async (photo: PhotoFile): Promise<void> => {
    const formData = new FormData();
    formData.append('file', RNFetchBlob.wrap(photo.path));

    console.log(RNFetchBlob.wrap(photo.path));
  };

  const capturePhoto = async (): Promise<void> => {
    setChecking(true);

    const photo = await camera?.current?.takePhoto({
      flash: 'off',
    });

    if (photo) {
      await verifyFace(photo);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <C.Container>
        {device ? (
          <Camera
            ref={camera}
            style={{flex: 1}}
            device={device}
            isActive={true}
            photo
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
