import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #808080;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Bold';
  color: #000;
  margin-top: 5px;
  margin-left: 20px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  padding-top: 20px;
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
