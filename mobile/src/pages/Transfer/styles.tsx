import styled from 'styled-components/native';
import CurrencyInput from 'react-native-currency-input';
import {darken} from 'polished';

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

export const Balance = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-left: 20px;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: 'Roboto-Regular';
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  padding-left: 20px;
`;

export const Item = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: #eee;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelItem = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #808080;
  margin-top: 10px;
  left: -5px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
`;

export const Bold = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: 'Roboto-Bold';
`;

export const Field = styled(CurrencyInput)`
  margin-top: 30px;
  font-size: 36px;
  color: black;
  font-family: 'Roboto-Bold';
  padding-left: 20px;
`;

export const Next = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${darken(0.05, '#98a8f8')};
  margin-right: 20px;
  margin-bottom: 20px;
`;
