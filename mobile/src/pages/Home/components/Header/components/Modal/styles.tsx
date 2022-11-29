import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Wrapper = styled(Modal)``;

export const Container = styled.View`
  padding: 20px;
  padding-bottom: 0;
  background-color: white;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
`;

export const Person = styled.Text`
  padding: 10px;
  background-color: white;
  font-size: 16px;
  color: black;
  font-family: 'Roboto-Regular';
`;

export const CloseLabel = styled.Text`
  text-align: center;
  padding: 20px;
  color: red;
  font-size: 16px;
  font-family: 'Roboto-Bold';
  border-top-width: 1px;
  border-top-color: #eee;
  margin-top: 10px;
`;
