import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreems = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
   <SafeAreaView className="bg-indigo-300 flex-1 justify-center items-center">
       <Animatable.Image
        source={require("../assets/Fooddelivery.png")}
        animation="slideInDown"
        iterationCount={1}
        className="h-96 w-96 bg-blue-300 rounded-full"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10  font-bold text-center"
      >
        Waiting for Respective Shops to accept your order! ☺️
      </Animatable.Text>
      <Progress.CircleSnail indeterminate={true}/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreems