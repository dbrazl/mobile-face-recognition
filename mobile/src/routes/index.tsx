import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import AreaPix from '../pages/AreaPix';
import Transfer from '../pages/Transfer';
import TransferContacts from '../pages/TransferContacts';
import VerifyID from '../pages/VerifyID';
import CameraView from '../pages/CameraView';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pix" component={AreaPix} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="TransferContacts" component={TransferContacts} />
        <Stack.Screen name="VerifyID" component={VerifyID} />
        <Stack.Screen name="CameraView" component={CameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
