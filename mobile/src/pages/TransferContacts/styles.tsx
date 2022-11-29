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

export const Initial = styled.Text`
  font-size: 40px;
  font-family: 'Roboto-Regular';
  color: #808080;
  text-transform: uppercase;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #808080;
  margin-left: 20px;
  margin-top: 20px;
`;
