// https://www.npmjs.com/package/@tanstack/react-query
// https://tanstack.com/query/latest/docs/framework/react/overview
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';



const apiData = [
  {
    id: 1,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 1',
    description: 'This is product 1',
    price: 10.99,
  },
  {
    id: 2,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 2',
    description: 'This is product 2',
    price: 9.99,
  },
  {
    id: 3,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 3',
    description: 'This is product 3',
    price: 12.99,
  },
  {
    id: 4,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Product 4',
    description: 'This is product 4',
    price: 8.99,
  },
];

// const fetchApiData = async (searchQuery) => {
//   // const filteredData = apiData.filter((item) =>
//   const filteredData = apiResponse.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   return filteredData;
// };

const TanStackSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryClient = useQueryClient();
  const [apiResponse, setApiResponse] = useState('');

  const fetchApiData = async (searchQuery) => {
    // const filteredData = apiData.filter((item) =>
    const filteredData = apiResponse.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch('(link unavailable)');
      //   const jsonData = await response.json();
      //   setData(jsonData);
      // } catch (error) {
      //   setError(error.message);
      // } finally {
      //   setIsLoading(false);
      // }

      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setApiResponse(response.data)
      } catch (error) {
        console.error(error);
      }
      
    };
    fetchData();
  }, []);

  

//   const { data, error, isLoading } = useQuery(
//     ['apiData', searchQuery],
//     () => fetchApiData(searchQuery),
//     {
//       enabled: searchQuery.length > 0,
//     }
//   );

  const { data, error, isLoading } = useQuery({
    // queryKey: ['apiData', searchQuery],
    queryKey: ['apiResponse', searchQuery],
    queryFn: () => fetchApiData(searchQuery),
    enabled: searchQuery.length > 0,
  });
  

  const handleSearch = () => {
    queryClient.invalidateQueries('apiData');
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
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              {/* <Image source={{ uri: item.imageUrl }} style={styles.resultImage} /> */}
              <Image source={{ uri: item.image }} style={styles.resultImage} />
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
      )}
    </SafeAreaView>
  );
};

export default TanStackSearchBar;


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
  
    