import BannerCarousel from '../../components/BannerCarousel';
import HeaderMain from '../../components/HeaderMain';
import { ScrollView } from 'react-native';
import MainCategories from '../../components/MainCategories';

const index = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default index;
