//import { StatusBar } from 'expo-status-bar';
//import { Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ShopScreens from './Screens/ShopScreens';
import BasketScreen from './Screens/BasketScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreems';
import DeliveryScreen from './Screens/DeliveryScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user }= useAuth()
  if(user){ 
    return(
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}
     options={{ presentation: "fullScreenModal", headerShown: false }}
     />
    <Stack.Screen name="Shops" component={ShopScreens}
    options={{ presentation: "fullScreenModal", headerShown: false }} />
    <Stack.Screen
        name="Basket"
       component={BasketScreen}
        options={{ presentation: "modal", headerShown: false }}
                />
    <Stack.Screen
      name="PreparingOrderScreen"
      component={PreparingOrderScreen}
      options={{ presentation: "fullScreenModal", headerShown: false }}
                  
                />
      <Stack.Screen
      name="Delivery"
      component={DeliveryScreen}
      options={{ presentation: "fullScreenModal", headerShown: false }}
              />
    </Stack.Navigator>
    )

  }else{
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
         }}>
          
              <>
              <Stack.Screen
                  name="Welcome"
                  component={WelcomeScreen}
                  options={{ presentation: "fullScreenModal", headerShown: false }}/>
             <Stack.Screen
                  name="SignUP"
                  component={SignUpScreen}
                  options={{ presentation: "fullScreenModal", headerShown: false }}/>
             
              </>
          
              <Stack.Screen name="Login" component={LoginScreen}/>  
        </Stack.Navigator>
  )
}
}

export default StackNavigator