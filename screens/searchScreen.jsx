import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import ProductsTanStackPage from './productsTanStack';


const SearchScreenPage = () => {
  return (
    <View style={styles.container}>
        <ProductsTanStackPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: responsiveHeight(6),
    flex: 1,
  },
});

export default SearchScreenPage;