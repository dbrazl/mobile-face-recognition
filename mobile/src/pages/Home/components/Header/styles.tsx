import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #98a8f8;
  height: 150px;
  padding: 20px;
`;

export const Account = styled.View`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  background-color: ${darken(0.05, '#98a8f8')};
`;

export const Greetings = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Regular';
  color: #fff;
  margin-top: 30px;
`;
