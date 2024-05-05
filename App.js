//import { StatusBar } from 'expo-status-bar';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './Screens/HomeScreen';
//import ShopScreens from './Screens/ShopScreens';
import { Provider } from 'react-redux';
import { store } from './store';
//import BasketScreen from './Screens/BasketScreen';
//import PreparingOrderScreen from './Screens/PreparingOrderScreems';
//import DeliveryScreen from './Screens/DeliveryScreen';
//import LoginScreen from './Screens/LoginScreen';
import StackNavigator from './StackNavigator';
import React from 'react';





export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>

        
        <StackNavigator/>
        

      </Provider>
    </NavigationContainer>
  );
}


