import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectShop } from '../Slices/shopSlice'
import { decrement, selectBasketItems, selectBasketTotal } from '../Slices/basketSlice'
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const navigation= useNavigation()
    const basketTotal = useSelector(selectBasketTotal)
    const shop = useSelector(selectShop)
    const items = useSelector(selectBasketItems)
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
      const groupItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      }, {});
     setGroupItemsInBasket(groupItems)

    },[items])
   // console.log(groupItemsInBasket)

  return (
    <SafeAreaView className=" flex-1 bg-white">
     <View className="flex-1 bg-gray-200">
      <View className =" p-8 border-b border-gray-500 bg-blue-200 shadow-md">
         <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {shop.title}
            </Text>
            <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute   p-2 bg-gray-100 rounded-full"
          >
           <Icon.ArrowLeft color="blue" width={17} opacity={0.4} height={17}/>
          </TouchableOpacity>
          </View>
          
      </View>

      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
      <Image
               source={require('../assets/sw.png')
                
               }
               className= ' w-8 h-8 bg-gray-300 p-4 rounded-full'
             />
            <Text className="flex-1">Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-blue-300">Change</Text>
          </TouchableOpacity>

          
      </View>
      <ScrollView className="divide-y divide-blue-200">
            {Object.entries(groupItemsInBasket).map(([key,items])=>(
               <View  key={key} className="flex-row items-center  space-x-4 py-2 px-5 ">
                 <Text className="text-blue-500">{items.length} x</Text>
                 <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-14 w-14 rounded"
              />
               <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                {items[0]?.price} 
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-red-500 text-xs"
                  onPress={() => dispatch(decrement({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
               </View>
            ))}
          </ScrollView>
          
          <View className="p-5 bg-white mt-5 space-y-5">
            <View className="flex-row">
              <Text className="text-gray-400 flex-1 ">Total Items Price in Ksh</Text>
              <Text className="text-gray-400">ksh {basketTotal}</Text>
            </View>
            <View className="flex-row">
              <Text className="text-gray-400 flex-1 ">Delivery Price</Text>
              <Text className="text-gray-400">ksh  {250} </Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Total Order price in Ksh</Text>
              <Text className="font-extrabold"> ksh {basketTotal+250}</Text>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg bg-blue-500 p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
          </View>
          
     </View>
     
   </SafeAreaView>
  )
}

export default BasketScreen