import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Entypo from "@expo/vector-icons/Entypo"
const index = () => {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image />
            <View>
                <Text></Text>
                <Text></Text>
                <Entypo name="chevron-right" size={20} color="purple" />
            </View>
        </View>
        <View></View>
    </View>
  )
}

export default index;

const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    headerMain: {
        height: height*0.064,
        backgroundColor: "#f7d102",
    },
    headerOne: {},
});