import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const CaptureButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 5px solid #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InternalCircle = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 32.5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator`
  margin-bottom: 10px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #fff;
`;
