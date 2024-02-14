import { useState } from 'react';
import { View, Text } from 'react-native';

const DetailProperty = () => {
  const [details, setDetails] = useState<string[]>([
    'Sütlü kıtır çikolata ve badem parçacıkları ile kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek Bilgiler',
  ]);
  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          borderBottomWidth: index == details.length - 1 ? 0 : 0.4,
          borderBottomColor: 'lightgrey',
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            color: index == 0 ? '#424242' : '#687482',
            fontSize: index == 0 ? 10 : 13,
            fontWeight: index == 0 ? '400' : '500',
          }}
        >
          {detail}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      {details.map((item, index) => (
        <TextComponent detail={item} key={index} index={index} />
      ))}
    </View>
  );
};

export default DetailProperty;
