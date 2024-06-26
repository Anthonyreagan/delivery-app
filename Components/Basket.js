import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import CurrencyFormatter from 'react-native-currency-formatter'

const Basket = () => {
   const items = useSelector(selectBasketItems)
   const navigation = useNavigation()
   const basketTotal = useSelector(selectBasketTotal)
   
   if (items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=> navigation.navigate("Basket")}
       className="mx-5 bg-blue-300 p-4 rounded-lg flex-row items-center space-x-7">
      <Text className="text-white font-extrabold text-lg bg-[#514ec9] py-1 px-2 rounded-full">
          {items.length}
        </Text>
       
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-ld text-white font-extrabold">
          {basketTotal} 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket