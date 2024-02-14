import { View, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailsBox from '../../components/DetailsBox';
import DetailProperty from '../../components/DetailsProperty';

const ProductsDetailsScreen = (props: any) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
  });
  console.log('Our product is: ', product);
  if (!product) {
    return <ActivityIndicator color={'#5d3ebd'} />;
  }

  return (
    <View>
      <ImageCarousel images={product.images} />
      <DetailsBox
        price={product.fiyat}
        name={product.name}
        quantity={product.miktar}
      />
      <Text
        style={{
          paddingHorizontal: 10,
          paddingVertical: 14,
          color: '#808899',
          fontWeight: '600',
        }}
      >
        Detaylar
      </Text>
      <DetailProperty />
    </View>
  );
};

export default ProductsDetailsScreen;
