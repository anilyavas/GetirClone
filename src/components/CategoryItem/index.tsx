import { View, Text, Pressable, Image,Dimensions } from 'react-native'
import React from 'react'


const {width,height} = Dimensions.get("window")
const CategoryItem = () => {
  return (
    <Pressable>
        <Image style={{width:width*0.18, height: height*0.18  }} source={{uri: "https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg"}}/>
        <Text>İndirimler</Text>
    </Pressable>
  )
}

export default CategoryItem