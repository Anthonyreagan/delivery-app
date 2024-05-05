import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-blue-300">
      <View className="flex-1 flex justify-around my-4">
         <Text className="  font-bold text-4xl text-center">
            welcome To Swift Serve App!!
         </Text>
         <Text className=" font- text-sm text-center">
            Seamless and Efficient Shopping
         </Text>
         <View className="flex-row justify-center">
            <Image
               source={require('../assets/del.gif')
                
            }
            style={{width: 350, height:350}}
            className="rounded-full"
             />
         </View>
         <View>
            <TouchableOpacity onPress={()=> navigation.navigate("SignUP")}className=" py-3 bg-white mx-7 rounded-xl">
                <Text className=" text-xl font-bold text-center text-black">
                     Sign Up
                </Text>
                </TouchableOpacity>
                <View className=" flex-row justify-center">
                    <Text className="text-white font-semibold ">
                        Already have an Account?
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                        <Text className="font-semibold ">
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
         </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen