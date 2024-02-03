import { Text, Pressable, Image,Dimensions } from 'react-native'
import React from 'react'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'

const {width,height} = Dimensions.get("window")
type categoryItemProps = {
    item: Category
}
const CategoryItem = ({item}:categoryItemProps) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("CategoryDetails",{category: item})} style={{width: width*0.25, height: width*0.24, flexDirection: "column",marginTop: 10, alignItems: "center", justifyContent: "space-between"}}>
        <Image style={{width:width*0.18, height: width*0.18 , borderRadius: 8 }} source={{uri: item.src}}/>
        <Text style={{fontSize: 12, color: "#616161", fontWeight: "500"}}>{item.name}</Text>
    </Pressable>
  )
}

export default CategoryItem