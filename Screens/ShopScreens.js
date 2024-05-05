import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import ItemsRow from '../Components/ItemsRow';
import Basket from '../Components/Basket';
import { setShop } from '../Slices/shopSlice';
import { useDispatch } from 'react-redux';
//import  { createContext, useContext } from 'react';



const ShopScreens = () => {
    const navigation = useNavigation()
    const dispatch= useDispatch()
   const {
   params: {
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
         },
  } = useRoute()

  useEffect(()=>{
    dispatch(setShop({
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
  )
  },[dispatch])

    
  return (

    <>
    <Basket/>
    <ScrollView>
         <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
           <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
           <Icon.ArrowLeft color="blue" width={17} opacity={0.4} height={17}/>
          </TouchableOpacity>
          </View>

          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row item-center space-x-1">
                  <Icon.Star color="blue" width={17} opacity={0.4} height={17} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> . {genre}
                  </Text>
                </View>
                <View className="flex-row item-center space-x-1">
                  <Icon.MapPin color="gray" width={20}opacity={0.4} height={20} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-xs text-gray-500">
                      Nearby . {address}
                    </Text>
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">
                {description}
              </Text>
            </View>
          </View>

          <TouchableOpacity className="flex-row bg-white items-center space-x-2 p-4 border-y border-gray-300">
            <Icon.HelpCircle color="blue" width={17} opacity={0.4} height={17} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Want Items to your Door
            </Text>
            <Icon.ChevronRight color="blue" width={17} opacity={0.4} height={17} />
          </TouchableOpacity>
         
         <View className ="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {items?.map((item) => (
            <ItemsRow
              key={item._id}
              id={item._id}
              name={item.item}
              description={item.short_description}
              price={item.price}
              image={item.image}
            />
          ))}
         </View>
    </ScrollView>
    </>
  )
}
export default ShopScreens