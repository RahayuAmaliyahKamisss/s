import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Onboarding from './Onboarding';
import DetailItem from './DetailItem';
import Order from './Order';

// Definisikan ParamList untuk semua screen yang ada
type ParamList = {
  Onboarding: undefined; 
  HomeScreen: undefined; 
  DetailItem: { itemId: number }; 
  Order: undefined; 
};

const Stack = createStackNavigator<ParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
