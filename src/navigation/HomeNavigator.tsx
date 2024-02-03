import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"


const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name=''/>
    </Stack.Navigator>
  )
}

export default HomeNavigator