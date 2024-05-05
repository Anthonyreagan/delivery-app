import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CurrencyFormatter from 'react-native-currency-formatter';
import { urlFor } from '../sanity';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,  selectBasketItemsWithId } from '../Slices/basketSlice';

const ItemsRow = ({
    id,
    name,
    description,
    price,
    image,

}) => {
  const [isPressed, setIsPressed ] = useState(false);
  const dispatch = useDispatch ();
  const items= useSelector( (state)=> selectBasketItemsWithId(state, id))
  
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(decrement({ id }));
  };
  const addItemsToBasket = ()=>{
    dispatch(increment({ 
      id,
      name,
      description,
      price,
      image
    }))
  }
  console.log(items)

  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)}
     className={`bg-white border p-4 border-blue-200 ${isPressed && "border-b-0"}`}>
         <View className="flex-row">
          <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description} </Text>
        <Text className="text-gray-400 mt-2">
            ksh: {price} 
            </Text>
        </View>
        <View>
            <Image
              style={{
                borderWidth: 0,
                borderColor: "blue",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
          </View>

    </TouchableOpacity>

    {isPressed &&(
        <View className="bg-white px-4">
            <View className=" flex-row items-center space-x-2 pb-3">
              
                <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                    <Icon.MinusSquare   color={items.length > 0 ? "red" : "gray"} width={40}  height={27} />
                </TouchableOpacity >
                
                <Text>{items.length}</Text>
    
                <TouchableOpacity onPress={addItemsToBasket}>
                    <Icon.PlusSquare  color="green" width={40}  height={27} />
                </TouchableOpacity>
                </View>
           
        </View>
    )}
    </>
  )
}

export default ItemsRow