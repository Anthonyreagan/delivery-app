import { View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import Categories from '../Components/Categories';
import FeaturedRow from '../Components/FeaturedRow';
import sanityClient from '../sanity';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';



const HomeScreen = () => {

  const [featuredCategories, setFeaturedCategories] = useState([])

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
 
  const handleFilter = (value)=>{
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
  }
  const handleLogout =async ()=>{
    await signOut(auth)
  }

  useEffect(()=>{
   sanityClient.fetch(`
      *[_type == "featured"]{
       ...,
       shops[]->{
       ...,
       items[]->
        }
    }
   
   `).then((data) => {
    setFeaturedCategories(data)
    setData(data)
    setFilterData(data)
   } )
  },[])
  //console.log(featuredCategories)

  return (
    <SafeAreaView className="bg-white pt-5">
      
        {/*header */}
        <View className="flex-row pb-3 items-centre mx-2 space-x-2 ">
            <Image 
               source={require('../assets/sw.png')
                
               }
               className= ' w-8 h-8 bg-gray-300 p-4 rounded-full'
             />
               <View  className="flex-1" >
                  <Text className="text-sm text-gray-500 font-bold">
                    shop now!
                  </Text>
                  <Text className=" font-bold text-xl">
                    Delivered With Haste!
                   <Icon.ChevronDown size={20} color="#00008b"/>
                  </Text>
               </View>
                
               <TouchableOpacity onPress={handleLogout} className="">
                 <Text className="text-blue-700 font-extrabold">Log Out</Text>
               </TouchableOpacity>
                 
        </View>

        {/*search */}
         <View className="flex-row space-x-2 items-center pb-2 pl-3 pr-1  ">
           <View className="bg-gray-200 flex-row flex-1 space-x-2 p-3 rounded " >
           <Icon.Search color= "gray" size={10}/>
          
           <TextInput className="" placeholder='Supermarkets, Restaurants, Beautyshops & Hotels'
           keyboardType='default' onChange={ e => handleFilter(e.target.value)}

           />
       
           </View>
       
         </View>
         
         {/*Body */}
         <ScrollView 
          className="bg-blue-100 rounded-lg"
          contentContainerStyle={{
            paddingBottom: 100,
          }}>
           {/*categories */}
              <Categories/>
        
          
           {/* Featured row */}  

           {featuredCategories?.map((category) =>(
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              desc={category.short_description}
           />
           ))}

         { /* <FeaturedRow
           id="12"
           title="Featured"
           desc="Paid placement from our patners"
           />
            <FeaturedRow
           id="123"
           title="Online Self Service"
           desc="Seamless and Efficient Online Shopping"
           />
            <FeaturedRow
           id="124"
           title="Door Delivery"
           desc="One Tap Away To Your Goods"
          />*/}

         </ScrollView>
               
     
    </SafeAreaView>
  )
}

export default HomeScreen