import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={30} color="#90EE90" style={styles.searchIcon} />
        {/* <Icon name="search" size={30} color="#4F8EF7" /> */}
        {/* <MaterialCommunityIcons name="home" color="#ccc" size={30} /> */}
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#90EE90"
        />
      </View>
      <MaterialCommunityIcons name="tune" size={24} color="green" style={styles.toggleIcon} />

    </View>
  );
};


const styles = StyleSheet.create({
    searchBarContainer: {
      marginBottom: responsiveHeight(3),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    toggleIcon: {
      marginRight: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
      },
      searchIcon: {
        marginRight: 5,
      },
      searchInput: {
        flex: 1,
        height: 40,
        fontSize: 20,
        // color: '#333',
        color: '#90EE90',
        marginTop:10
      },
});

export default SearchBar;
