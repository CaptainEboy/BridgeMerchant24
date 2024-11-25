import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Image } from 'react-native';

// Dummy API data
const apiData = [
  {
    id: 1,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 1',
    description: 'This is product 1',
    price: 10.99,
  },
  {
    id: 2,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 2',
    description: 'This is product 2',
    price: 9.99,
  },
  {
    id: 3,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 3',
    description: 'This is product 3',
    price: 12.99,
  },
  {
    id: 4,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 4',
    description: 'This is product 4',
    price: 8.99,
  },
  {
    id: 5,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 4',
    description: 'This is another product 4',
    price: 8.99,
  },
  {
    id: 6,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 4',
    description: 'This is another product 4, third time',
    price: 8.99,
  },
  {
    id: 7,
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 4',
    description: 'This is another product 4, fourth time',
    price: 8.99,
  },

];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = apiData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search"
        />
        <Text style={styles.searchButton} onPress={handleSearch}>
          Search
        </Text>
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.resultImage} />
            <View style={styles.resultInfo}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultDescription}>{item.description}</Text>
              <Text style={styles.resultPrice}>${item.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        />
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f7f7f7',
      },
      searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
      },
      searchButton: {
        marginLeft: 10,
        fontSize: 16,
        color: '#007bff',
      },
      resultItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      resultImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
      },
      resultInfo: {
        flex: 1,
        marginLeft: 10,
      },
      resultTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      resultDescription: {
        fontSize: 14,
        color: '#666',
      },
      resultPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
      },
    });

export default Products;
            