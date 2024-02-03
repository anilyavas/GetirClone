import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo} from "@expo/vector-icons"
import HomeNavigator from "./HomeNavigator";
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
    
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
        
    </Tab.Navigator>
  )
}

export default RootNavigator