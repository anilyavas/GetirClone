import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";
import HeaderMain from "../../components/HeaderMain";
import { ScrollView } from "react-native";

const index = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: "#f5f5f5"}}>
    <HeaderMain />
    <BannerCarousel />
    <CategoryItem />
    </ScrollView>   
  )
}

export default index;

