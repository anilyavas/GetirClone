import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.getir.com/misc/emoji/house.png' }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: '600', fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 11.5,
              color: '#6e7480',
              marginLeft: 6,
              marginRight: 10,
            }}
          >
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
          <Entypo name='chevron-right' size={22} color='#5d3ebd' />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#5d3ebd' }}>
            TVS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5d3ebd' }}>
            <Text
              style={{ fontSize: 16, color: '#5d3ebd', fontWeight: 'bold' }}
            >
              13dk
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#f7d102',
  },
  headerOne: {
    height: height * 0.064,
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTwo: {
    width: '25%',
    // backgroundColor: "red",
    height: height * 0.064,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#f3f2fd',
    borderLeftWidth: 2,
  },
  image: {
    width: 30,
    height: 30,
  },
});
