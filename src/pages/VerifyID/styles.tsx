import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView``;

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding-top: 50px;
  background-color: white;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: black;
  font-family: 'Roboto-Bold';
  padding-left: 20px;
`;

export const Message = styled.Text`
  font-size: 20px;
  color: #808080;
  font-family: 'Roboto-Regular';
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #98a8f8;
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Bold';
  color: white;
`;

export const CameraWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
