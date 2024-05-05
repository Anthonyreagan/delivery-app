import { View, Text, Image,TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


const SignUpScreen = () => {

  const navigation = useNavigation()
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  const handleSubmit = async ()=>{
    if(email && password){
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            Alert.alert( "success",'Signed up in succeesfully')

        }catch(err){
          Alert.alert( "Error",'Invalid Signed In')
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
            style={{width: 300, height:340}}></Image>

      </View>

     </SafeAreaView>
     <View className=" flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
       <View className="form space-y-2">
       <Text className="text-gray-700 ml-4 "> Full Name</Text>
       <TextInput
             className=" p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             value={name}
             onChangeText={value=> setName(value)}
             placeholder='Name'
          />
         <Text className="text-gray-700 ml-4 "> Email Address</Text>
           <TextInput
             className=" p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             value={email}
             onChangeText={value=> setEmail(value)}
             placeholder='Enter Email'
          />
          <Text className="text-gray-700 ml-4 "> Password</Text>
           <TextInput
             className=" p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
             value={password}
             onChangeText={value=> setPassword(value)}
             placeholder='Enter password'
             secureTextEntry
             />
            
             <TouchableOpacity onPress={handleSubmit} className=" py-3 bg-blue-200 rounded-xl">
               <Text className=" text-xl text-center text-gray-900">Sign Up</Text>
             </TouchableOpacity>
             <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold ">
                Already Have an Account?
              </Text>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Login")}
              className=" space-x-3  rounded-xl">
               <Text className=" font-semibold  text-blue-500">Login</Text>
             </TouchableOpacity>
             </View>
         </View>
     </View>
    </View>
    </ScrollView>
  )
}

export default SignUpScreen