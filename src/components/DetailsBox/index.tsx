import { View, Text } from 'react-native';

type DetailsBoxProps = {
  price: number;
  quantity: string;
  name: string;
};
const DetailsBox = ({ price, quantity, name }: DetailsBoxProps) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: '#5d3ebd',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 12,
        }}
      >
        ₺{price}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          marginTop: 12,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          marginTop: 8,
          color: '#848890',
          paddingBottom: 17,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
};

export default DetailsBox;
