import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import { Image, Text } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProducstDetailsScreen from '../screens/ProducstDetailsScreen';


const Stack = createStackNavigator();

const HomeNavigator = () => {
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
        <Stack.Screen name='ProducstDetails' component={ProducstDetailsScreen} options={{
          
        }}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator