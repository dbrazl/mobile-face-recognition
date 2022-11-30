import React, {useEffect} from 'react';
import {StatusBar, BackHandler} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import * as C from './styles';

const TransferSuccess: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const goToHome = (): boolean => {
    navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goToHome);

    return () => BackHandler.removeEventListener('hardwareBackPress', goToHome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>Sucesso!</C.Title>
            <C.Message>O montante foi transferido!</C.Message>
          </C.Scroll>
        </C.SafeArea>
        <C.ButtonWrapper>
          <C.Button onPress={goToHome}>
            <C.ButtonText>Voltar</C.ButtonText>
          </C.Button>
        </C.ButtonWrapper>
      </C.Container>
    </>
  );
};

export default TransferSuccess;
