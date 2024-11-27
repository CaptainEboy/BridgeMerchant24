import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/searchBar';
import SearchHistoryButtons from '../components/searchHistory';
import SearchHistories from '../components/searchHistories';
import Categories from '../components/categories';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import ProductsTanStackPage from './productsTanStack';


const SearchScreenPage = () => {
  return (
    <View style={styles.container}>
        {/* <SearchBar />
        <SearchHistoryButtons />
        <SearchHistories />
        <Categories /> */}
        <ProductsTanStackPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // marginHorizontal: 20, //To make anything in that conatiner center alinged 
    paddingTop: responsiveHeight(6),
    flex: 1,
  },
});

export default SearchScreenPage;