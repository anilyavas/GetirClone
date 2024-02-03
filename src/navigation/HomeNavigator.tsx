import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import { Image } from 'react-native';


const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} 
        options={{headerStyle:{backgroundColor: "#5c3ebc"},headerTitle: () => <Image source={require("../../assets/getirlogo.png")} 
        style={{width: 70,height: 30}}/>}}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator