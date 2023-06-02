import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heading, VStack } from "native-base";
import { Home } from '../screens/Home';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRotas() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
