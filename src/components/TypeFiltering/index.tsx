import { useState } from 'react';
import { Text, ScrollView, Dimensions, Pressable } from 'react-native';

const { width, height } = Dimensions.get('window');
const TypeBox = ({
  item,
  active,
  setCat,
}: {
  item: string;
  active: string;
  setCat: any;
}) => {
  return (
    <Pressable
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginRight: 12,
          borderRadius: 6,
          height: height * 0.044,
        },
        item == active
          ? { backgroundColor: '#5c3ecb' }
          : { borderColor: '#f0eff7', borderWidth: 1.3 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, fontWeight: '600', color: '#5c3ecb' },
          item == active && { color: 'white' },
        ]}
      >
        {item}
      </Text>
    </Pressable>
  );
};
const TypeFiltering = () => {
  const [category, setCategory] = useState<String>('Birlikte İyi Gider');
  return (
    <ScrollView
      style={{
        width: '100%',
        height: height * 0.072,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default TypeFiltering;
