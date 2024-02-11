import { View, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';

const ProductsDetailsScreen = (props) => {
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
    </View>
  );
};

export default ProductsDetailsScreen;
