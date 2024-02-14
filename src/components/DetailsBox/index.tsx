import { View, Text } from 'react-native';
import React from 'react';

type DetailsBoxProps = {
  price: number;
  quantitiy: number;
  name: string;
};
const DetailsBox = ({ price, quantitiy, name }: DetailsBoxProps) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#5d3ebd', fontWeight: 'bold', marginTop: 12 }}>
        ₺{price}
      </Text>
      <Text>{name}</Text>
      <Text>{quantitiy}</Text>
    </View>
  );
};

export default DetailsBox;
