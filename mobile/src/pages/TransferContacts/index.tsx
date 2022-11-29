import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import {useRoute, RouteProp} from '@react-navigation/native';
import {UserContext} from '../../state/user/state';
import {ParamList} from './@types';
import {User} from '../../models/user';

import * as C from './styles';

const TransferContacts: React.FC = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {state} = useContext(UserContext);

  const {amount} = route.params;

  const parseUser = (user: User) => {
    return {
      initial: user.name[0],
      name: user.name,
      onPress: () => {},
    };
  };

  const contacts = state.users
    ?.filter((user: User) => user.name !== state.user.name)
    .map(parseUser);

  const getPrice = (value: number): string => {
    return `R$ ${value?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const renderItem = ({item}) => {
    return (
      <C.Column>
        <C.Item onPress={item.onPress}>
          <C.Initial>{item.initial}</C.Initial>
        </C.Item>
        <C.LabelItem>{item.name}</C.LabelItem>
      </C.Column>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>
              Para quem você quer transferir {getPrice(amount)}?
            </C.Title>
            <C.Message>
              Encontre um contato na sua lista ou inicie uma nova transferência
            </C.Message>
            <C.Label>Contatos frequentes</C.Label>
            <C.List
              data={contacts}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              horizontal
            />
          </C.Scroll>
        </C.SafeArea>
      </C.Container>
    </>
  );
};

export default TransferContacts;
