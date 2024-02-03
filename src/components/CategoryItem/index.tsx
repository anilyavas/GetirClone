import { View, Text, Pressable, Image,Dimensions } from 'react-native'
import React from 'react'


const {width,height} = Dimensions.get("window")
const CategoryItem = () => {
  return (
    <Pressable>
        <Image style={{width:width*0.18, height: height: height*0.18  }} ource={}/>
        <Text></Text>
    </Pressable>
  )
}

export default CategoryItem