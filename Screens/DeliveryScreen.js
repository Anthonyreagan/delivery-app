import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  import MapView, { Marker } from "react-native-maps";

  import { useSelector } from "react-redux";
  import {  selectShop } from "../Slices/shopSlice";
  import * as Icon from "react-native-feather";
  import * as Progress from "react-native-progress";
  import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
const navigation = useNavigation()
const shop = useSelector(selectShop);

  return (
    <View className="bg-indigo-400 flex-1">
      <SafeAreaView  className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
               <Icon.XCircle  color="red" width={40}opacity={0.5} height={35}/>
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
           
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className=" mt-3 text-gray-500 font-extrabold" >Please Wait as Your Order placed at Respective Shops is prepared</Text>
        </View>
      </SafeAreaView>

      <MapView 
        initialRegion={{
            latitude: shop.lat,
            longitude: shop.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }} 
          className="flex-1 mt-10 z-0"
          mapType="mutedStandard"
          >
        
        <Marker
          coordinate={{
            latitude: shop.lat,
            longitude: shop.long,
          }}
          title={shop.title}
          description={shop.description}
          identifier="origin"
          pinColor="#00CCBB"
        />

      </MapView>
      
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
           
           source={require('../assets/sw.png')
            
           }
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg ">Anthony Simiyu</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr">Call- 0769068317</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen