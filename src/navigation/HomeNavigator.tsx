import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import { Image, Pressable, Text } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductsDetailsScreen from '../screens/ProductsDetailsScreen';
import {Ionicons,Foundation} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";


const tabHiddenRoutes = ["ProductDetails","CartScreen"];
const Stack = createStackNavigator()
const HomeNavigator = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} 
        options={{headerStyle:{backgroundColor: "#5c3ebc"},headerTitle: () => <Image source={require("../../assets/getirlogo.png")} 
        style={{width: 70,height: 30}}/>}}/>
        <Stack.Screen name='CategoryDetails' component={CategoryFilterScreen} 
        options={{
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerStyle:{backgroundColor: "#5c3ebc"},
            headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15,color: "white"}}>Ürünler</Text>
        )}}/>
        <Stack.Screen name='ProductsDetails' component={ProductsDetailsScreen} options={{
          headerTitle: () => (
            <Text style={{fontWeight: "bold", color: "white",fontSize: 15}}>Ürün Detayı</Text>
          ),
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#5c3ebc"},
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Pressable style={{paddingLeft: 12}} onPress={() => navigation.goBack()}>
              <Ionicons name='close' size={24} color={"white"}/>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{paddingRight: 12}}>
              <Foundation name='heart' size={24} color={"black"}/>
            </Pressable>
          )
        }}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator