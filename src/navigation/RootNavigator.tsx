import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo,FontAwesome,MaterialCommunityIcons} from "@expo/vector-icons"
import HomeNavigator from "./HomeNavigator";
import { Pressable } from "react-native";
const Tab = createBottomTabNavigator();
const RootNavigator = () => {

    const CustomTabBarButton = ({children}) => {
        return <Pressable style={{
            width: 58,
            height: 58,
            backgroundColor: "#5c3bbc",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 33,
            marginTop: -8,
            borderWidth: 3,
            borderColor: "white"
        }}>
            <Entypo name="list" size={32} color={"#ffd00c"}/>
        </Pressable>
    }
    
  return (
    <Tab.Navigator initialRouteName="Ana Sayfa" screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#5c3ebc",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
            height: 80
        }
    }}>
        <Tab.Screen name="Ana Sayfa" component={HomeNavigator} options={{
            tabBarIcon: ({color}) => (
                <Entypo name="home" size={24} color={color}/>
            )
        }}/>
        <Tab.Screen name="Search" component={HomeNavigator} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="search" size={24} color={color}/>
            )
        }}/>
        <Tab.Screen name="List" component={HomeNavigator} options={{
            tabBarButton: (props) => <CustomTabBarButton  {...props} />
        }}/>
        <Tab.Screen name="User" component={HomeNavigator} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="user" size={24} color={color}/>
            )
        }}/>
        <Tab.Screen name="Gift" component={HomeNavigator} options={{
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="gift" size={24} color={color}/>
            )
        }}/>
        
    </Tab.Navigator>
  )
}

export default RootNavigator