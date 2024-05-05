import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import ShopCard from './ShopCard';
import sanityClient from '../sanity';
//import Shop from '../Sanity/schemaTypes/Shop';

const FeaturedRow = ({id, title, desc}) => {
  const [shops , setShops] = useState([])

useEffect(()=>{
    sanityClient.fetch(
      `
    *[_type == "featured" && _id == $id] {
      ...,
      shops[]->{
        ...,
        items[]->,
          type->{name}
        
          
          },
          
    }[0]
    
    `,
    { id }
  )
  .then((data) => {
    setShops(data?.shops)
  })
    
   },[])
   //console.log(shops)

  return (
    <View>
     <View className="mt-4 flex-row items-center justify-between px-3 ">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon.ArrowRight color={"#00008b"}/>
     </View>
     <Text className="text-xs text-gray-400 px-4">{desc}</Text>

     <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">

        {/*ShopCards */}
        {shops?.map( (shop)=>(
          <ShopCard
           key={shop._id}
           id={shop._id}
           imgUrl={shop.image}
        title={shop.name}
        rating={shop.rating}
        genre={shop.type?.name}
        address={shop.address}
        description={shop.Short_description}
        items={shop.items}
        long={shop.longitude}
        lat={shop.latitude}
          />
        ))}


       {/* <ShopCard
        id={123}
        imgUrl={require('../assets/pzza.png')}
        title="Food"
        rating={3.5}
        genre="English"
        address="Kanduyi"
        description="lorem Ipsummmmmmmmmmmmmmm mshcgwygbhsdb"
        items={[]}
        long={20}
        lat={10}
        />
        <ShopCard
        id={123}
        imgUrl={require('../assets/beauty.png')}
        title="Beauty Products"
        rating={3.5}
        genre="English"
        address="Bungoma Town"
        description="lorem Ipsummmmmmmmmmmmmmm mshcgwygbhsdb"
        items={[]}
        long={20}
        lat={10}
        />
        <ShopCard
        id={123}
        imgUrl={require('../assets/sneakers.png')}
        title="Sneakers"
        rating={3.5}
        genre="English"
        address="Kanduyi"
        description="lorem Ipsummmmmmmmmmmmmmm mshcgwygbhsdb"
        items={[]}
        long={20}
        lat={10}
        />
        <ShopCard
        id={123}
        imgUrl={require('../assets/grocery.png')}
        title="Grocery"
        rating={3.5}
        genre="English"
        address="Kanduyi"
        description="lorem Ipsummmmmmmmmmmmmmm mshcgwygbhsdb"
        items={[]}
        long={20}
        lat={10}
        />
        <ShopCard
        id={123}
        imgUrl={require('../assets/unga.png')}
        title="HouseHolds"
        rating={3.5}
        genre="English"
        address="Bungoma Town"
        description="lorem Ipsummmmmmmmmmmmmmm mshcgwygbhsdb"
        items={[]}
        long={20}
        lat={10}
      />*/}





     </ScrollView>
    </View>
  )
}

export default FeaturedRow