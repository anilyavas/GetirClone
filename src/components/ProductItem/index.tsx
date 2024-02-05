import { View, Text, Pressable , Image, Dimensions} from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { Product } from '../../models'

const {width,height} = Dimensions.get("window")
type productItemType = {
    item: Product
}
const ProductItem = ({item}:{item:Product}) => {
  return (
      <Pressable style={{width: width*0.28, marginTop: 12,height: height*0.24,marginLeft: 12,marginBottom: 6}}>
        <Image style={{width: width*0.28, height: width*0.28,borderRadius: 12,borderWidth: 0.1,borderColor: "grey"}} source={{uri: item.image}}/>
      <View style={{flexDirection: "row",marginTop: 10,alignItems: "center"}}>
        <Text style={{fontSize: 11,color: "#747990",textDecorationLine: "line-through"}}>
            <Text>₺</Text>{item.fiyat}
        </Text>
        <Text style={{fontSize: 12,color: "#5d3ebd",fontWeight: "bold", marginLeft: 4}}>
            <Text>₺</Text>{item.fiyatIndirimli}
            </Text>
      </View>
      <Text style={{fontSize: 12,fontWeight: "600", marginTop: 5}}>{item.name}</Text>
      <Text style={{color: "#747990", fontSize: 12,marginTop: 4,fontWeight: "500"}}>{item.miktar}</Text>
      <View style={{alignItems: "center",justifyContent: "center",width: 30, height: 30,borderWidth: 0.3,borderColor: "lightgrey", backgroundColor: "white",position: "absolute", right: -6,top: -6,borderRadius: 6,shadowRadius: 3.8,shadowOpacity: 0.05}}>
        <Entypo name="plus" size={22} color={"#5d3ebd"} />
      </View>
      </Pressable>
  )
}

export default ProductItem