import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const SearchHistoryButtons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.searchHistory}>Search History</Text>
      </View>
      <View style={{marginLeft:-50}}>
        <Text style={styles.clearSearchHistory}>clear</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    flexDirection:"row",
    justifyContent:"space-between",
    // marginTop: responsiveHeight(20)
  },
  searchHistory: {
    // flex: 1,
    backgroundColor: '#fff',
    fontWeight:"bold",
    fontSize: responsiveFontSize(3)
    
  },
  clearSearchHistory: {
    // flex: 1,
    // backgroundColor: '#fff',
    fontWeight:"500",
    fontSize: responsiveFontSize(2),
    color: "lightgreen",
    marginTop:5
  },
//   content: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
});

export default SearchHistoryButtons;