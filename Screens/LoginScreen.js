import { View, Text, Image,TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


const LoginScreen = () => {

  const navigation = useNavigation()

  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async ()=>{
    if(email && password){
        try{
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert("Success",'logged in succeesfully')

        }catch(err){
          
            Alert.alert("Error",'invalid Credentials, Please Sign UP!!')
          
            console.log('got error :', err.message)
        }
    }
  }

return (
  <ScrollView className="mb-">
    <View className="flex-1 bg-blue-300">
     <SafeAreaView className="flex">
      <View className="flex-row justify-start">
        <TouchableOpacity onPress={()=> navigation.goBack()} 
        className="bg-white rounded-full ml-4">
           <Icon.ArrowLeftCircle color={"black"} width={30} height={30}/>
        </TouchableOpacity>
         
      </View>
      
      <View className="flex-row justify-center">
            <Image
               source={require('../assets/login.png')
                
            }
            style={{width: 350, height:430}}></Image>

      </View>

     </SafeAreaView>
     <View className=" flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
       <View className="form space-y-2">
         <Text className="text-gray-700 ml-4 "> Email Address</Text>
           <TextInput
             className=" p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             
             placeholder='Enter Email'
             value={email}
             onChangeText={value=> setEmail(value)}
          />
          <Text className="text-gray-700 ml-4 ">Password</Text>
           <TextInput
             className=" p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             value={password}
             onChangeText={value=> setPassword(value)}
             placeholder='password'
             secureTextEntry
             />
             <TouchableOpacity className="flex items-end mb-5">
               <Text className="text-gray-900">Forgot password</Text>
             </TouchableOpacity>
             <TouchableOpacity  onPress={handleSubmit} className=" py-3 bg-blue-200 rounded-xl">
               <Text className=" text-xl text-center text-gray-900">Log In</Text>
             </TouchableOpacity>
             <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold ">
                Don't Have an Account?
              </Text>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("SignUP")}
              className=" space-x-3  rounded-xl">
               <Text className=" font-semibold  text-blue-500">Sign Up</Text>
             </TouchableOpacity>
             </View>
         </View>
     </View>
    </View>
    </ScrollView>
  )
}

export default LoginScreen