import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import index from '../HeaderMain';

const { width, height } = Dimensions.get('window');
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.25,
        paddingTop: 25,
      }}
    >
      <FlatList
        style={{ width: width * 0.5, height: height * 0.21 }}
        data={images}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: 'stretch',
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View></View>
    </View>
  );
};

export default ImageCarousel;
