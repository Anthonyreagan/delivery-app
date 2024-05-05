import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
 
  const [categories, setCategories]= useState([])
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "category" ]
    
    `).then((data)=> {
      setCategories(data)
    })
  },
[])
  
  
  return (
  <ScrollView
   horizontal
   contentContainerStyle={{
    paddingTop: 10,
    paddingHorizontal: 13
    
   }}>
    
       {/*categoriesCard */}
       {categories.map((category) =>(
        <CategoryCard
         key={category._id}
         imgUrl={category.image}
         title={category.name}
        />
       ))}

     {/* <CategoryCard 
       imgUrl={require('../assets/noor.png')}
       title="Testing 1"/>
      <CategoryCard 
       imgUrl={require('../assets/bata.png')}
       title="Testing 2"/>
      <CategoryCard  
       imgUrl={require('../assets/khetias.png')}
       title="Testing 3"/>
      <CategoryCard  
       imgUrl={require('../assets/bestlady.png')}
       title="Testing 4"/>
      <CategoryCard  
       imgUrl={require('../assets/bestlady.png')}
       title="Testing 4"/>
      <CategoryCard  
       imgUrl={require('../assets/bestlady.png')}
       title="Testing 4"/>
      <CategoryCard  
       imgUrl={require('../assets/bestlady.png')}
       title="Testing 4"/>
      <CategoryCard  
       imgUrl={require('../assets/bestlady.png')}
      title="Testing 4"/>*/}

  </ScrollView>
  )
}

export default Categories