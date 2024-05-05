import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const ShopCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    description,
    items,
    long,
    lat,
}) => {
   
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
     
    onPress={()=>{
      navigation.navigate("Shops",{
       id,
       imgUrl,
       title,
       rating,
       genre,
       address,
       description,
       items,
       long,
       lat,

      })
    }}

className="bg-white mr-4  shadow-2xl">
      <Image 
        source={{
          uri: urlFor (imgUrl).url(),
        }}
        className="h-36 w-64 rounded"
      />
      <View className="px-3 pb-4">
      <Text className="text-lg font-extrabold pt-2">{title}</Text>
      <View className="flex-row space-x-2 items-center " >
        <Icon.Star color="blue" width={17} opacity={0.4} height={17}/>
        <Text className="text-gray-500 text-xs" >
        <Text className="text-blue-500">{rating}</Text> .. {genre}
        </Text>
      </View>

      <View className="flex-row space-x-2 items-center pt-1">
        <Icon.MapPin color="gray" width={20}opacity={0.4} height={20}/>
        <Text className="text-xs text-gray-500"> Nearby . {address}</Text>
      </View>
      </View>
     </TouchableOpacity>
  )
}

export default ShopCard