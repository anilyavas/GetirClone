import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CategoryItem from '../CategoryItem';
import categoriesGetir from '../../../assets/categoriesGetir';
import { Category } from '../../models';

const MainCategories = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default MainCategories;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
