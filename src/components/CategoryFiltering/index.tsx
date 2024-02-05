import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models';

const {height,width} = Dimensions.get("window")

const CategoryBox = ({item,active}:{item:Category,active:Category}) => {
    return <View style={[{paddingHorizontal: 9, flexDirection: "row",alignItems: "center"},item.name == active.name && {borderBottomColor: "#ffd00c",borderBottomWidth: 2.5}]}>
        <Text style={{fontSize: 14,color: "white", fontWeight: "600"}}>{item.name}</Text>
    </View>
}
const CategoryFiltering = ({category}:{category:Category}) => {
    const [categories,setCategories] = useState<Category[]>(categoriesGetir)
  return (
    <ScrollView style={{width: "100%" ,height: height*0.065,backgroundColor: "#7849f7"}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {
            categories.map((item) => <CategoryBox key={item.id} item={item} active={category}/>)
        }
    </ScrollView>
  )
}

export default CategoryFiltering