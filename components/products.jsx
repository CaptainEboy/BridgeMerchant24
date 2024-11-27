// https://www.npmjs.com/package/@tanstack/react-query
// https://tanstack.com/query/latest/docs/framework/react/overview
// https://ionic.io/ionicons
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';

// For Search Bar
import { Platform } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// For Search Bar History
import { Pressable } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import Categories from './categories';

import {
    responsiveWidth,
} from "react-native-responsive-dimensions";



const ButtonData = [
  { id: 1, text: 'Others' },
  { id: 2, text: 'Women' },
  { id: 3, text: 'Men Clo' },
  { id: 4, text: 'Electronics' },
  { id: 5, text: 'Shirts' },
  { id: 6, text: 'Discounted Items' },
  { id: 7, text: 'Fresh Vegetables' },
];




const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryClient = useQueryClient();
  const [apiResponse, setApiResponse] = useState('');

  const fetchApiData = async (searchQuery) => {
    const filteredData = apiResponse.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
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

  const { data, error, isLoading } = useQuery({
    queryKey: ['apiResponse', searchQuery],
    queryFn: () => fetchApiData(searchQuery),
    enabled: searchQuery.length > 0,
  });
  

  const handleSearch = () => {
    queryClient.invalidateQueries('apiData');
  };

  

  return (
  
    <SafeAreaView style={styles.container}>
      {/* Products */}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
        data={data}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.firstContentRow}>
            <View style={[styles.fruitCard, { backgroundColor: '#fff', borderColor:"#ccc" }]}>
              <Image source={{ uri: item.image }} style={{height:60, width:60,}} />
                <View style={{marginHorizontal: 10}}>
                  <Text numberOfLines={1} style={[styles.fruitCardText, {marginTop:16, fontWeight:"400"} ]}>{item.title}</Text>
                  <Text numberOfLines={1} style={[styles.fruitCardText, {marginTop:2, fontWeight:"400", fontSize:13, color:"grey"}]}>
                      {item.description}
                  </Text>
                  <Text style={[styles.fruitCardText, {marginTop:3, textAlign:"left", color:'lightgreen', fontSize: 16, fontWeight:"800"}]}>${item.price}</Text>
                </View>
                <View style={{backgroundColor:"green", alignSelf:"flex-end", marginBottom:-19, borderRadius:15, padding:4 }}>
                  <Ionicons name="add-outline" color="#fff" size={36} />
                </View>
            </View>
          </SafeAreaView>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        // add a space between the items only, the space should not affect the right or left of the flatlist
        columnWrapperStyle={{ justifyContent: 'space-between' }}



        ListHeaderComponent={
          <SafeAreaView>
            <View style={styles.searchBarContainer}>
              <View style={styles.searchBar}>
                <Ionicons name="search" size={30} color="#90EE90" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
                  placeholderTextColor="#90EE90"
                  placeholder="Search"
                />
              </View>
              <MaterialCommunityIcons name="tune" size={24} color="green" style={styles.toggleIcon} />
            </View>


            {/* Search Text */}
            <View style={styles.searchTextcontainer}>
              <View>
                <Text style={styles.searchHistory}>Search History</Text>
              </View>
              <View style={{marginLeft:-50}}>
                <Text style={styles.clearSearchHistory}>clear</Text>
              </View>
            </View>


            {/* Search History */}
            <View style={styles.searchHistoryContainer}>
              {ButtonData.map((item, index) => (
                <View key={item.id} style={[styles.buttonContainer, { width: '20%' }]}>
                  <Pressable
                    style={({ pressed }) => [
                      styles.button,
                      pressed && styles.pressedButton,
                    ]}
                    onPress={() => alert(`Pressed ${item.text}`)}
                  >
                    <Text style={styles.buttonText}>{item.text}</Text>
                  </Pressable>
                </View>
              ))}
            </View>


            {/* Categories */}
            <SafeAreaView>
              <View style={styles.firstContentRow}>
                <View style={[styles.fruitCard, { backgroundColor: '#FFB6C1' }]}> 	
                  <Image
                      style={styles.tinyLogo}
                      source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                  />
                  <Text style={styles.fruitCardText}>Fresh Fruits & Vegetables</Text>
                </View>
                <View  style={[styles.fruitCard, { backgroundColor: '#fffaf0' }]}> 
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={styles.fruitCardText}>Cooking Oil & Ghee</Text>
                </View>
              </View>

              <View style={styles.firstContentRow}>
                <View style={[styles.fruitCard, { backgroundColor: '#FF7F7F' }]}> 
                  <Image
                      style={styles.tinyLogo}
                      source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                  />
                  <Text style={styles.fruitCardText}>Meat & Fish</Text>
                </View>
                <View  style={[styles.fruitCard, { backgroundColor: '#ADD8E6' }]}> 
                  <Image
                      style={styles.tinyLogo}
                      source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                  />
                  <Text style={styles.fruitCardText}>Bakery & Snacks</Text>
                </View>
              </View>
            </SafeAreaView>

          </SafeAreaView>
        }
  
      />
    )}
      
      
    </SafeAreaView>
  );
};

export default Products;


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



      searchTextcontainer: {
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


      searchHistoryContainer: {
        //   flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: 5,
          backgroundColor: '#fff',
          marginBottom: responsiveHeight(2),
          marginTop: responsiveHeight(2)
        },
        buttonContainer: {
          margin: 2,
        },
        button: {
          backgroundColor: '#fafafa',
          padding: 2,
          borderRadius: 15,
        },
        pressedButton: {
          opacity: 0.7,
        },
        buttonText: {
          color: '#ccc',
          fontSize: 12,
          textAlign: 'center',
        },

        // Categories
        firstContentRow: {
          flexDirection:"row",
          justifyContent:"space-between", 
          padding: 2 //For extra space
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        fruitCard: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "yellow",
          height: responsiveHeight(24),
          width: responsiveWidth(43),
          borderRadius: 15,
          marginBottom: 8,
          borderColor: "red",
          borderWidth: 2,
        },
        fruitCardText: {
          fontSize: responsiveFontSize(2),
          textAlign:"center",
          fontWeight: "bold",
          marginTop: responsiveHeight(4)
        },
  });
  
    

// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
// import { Image } from 'react-native';

// // Dummy API data
// const apiData = [
//   {
//     id: 1,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 1',
//     description: 'This is product 1',
//     price: 10.99,
//   },
//   {
//     id: 2,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 2',
//     description: 'This is product 2',
//     price: 9.99,
//   },
//   {
//     id: 3,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 3',
//     description: 'This is product 3',
//     price: 12.99,
//   },
//   {
//     id: 4,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 4',
//     description: 'This is product 4',
//     price: 8.99,
//   },
//   {
//     id: 5,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 4',
//     description: 'This is another product 4',
//     price: 8.99,
//   },
//   {
//     id: 6,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 4',
//     description: 'This is another product 4, third time',
//     price: 8.99,
//   },
//   {
//     id: 7,
//     imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Product 4',
//     description: 'This is another product 4, fourth time',
//     price: 8.99,
//   },

// ];

// const Products = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     const filteredResults = apiData.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchInput}
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//           placeholder="Search"
//         />
//         <Text style={styles.searchButton} onPress={handleSearch}>
//           Search
//         </Text>
//       </View>
//       <FlatList
//         data={searchResults}
//         renderItem={({ item }) => (
//           <View style={styles.resultItem}>
//             <Image source={{ uri: item.imageUrl }} style={styles.resultImage} />
//             <View style={styles.resultInfo}>
//               <Text style={styles.resultTitle}>{item.title}</Text>
//               <Text style={styles.resultDescription}>{item.description}</Text>
//               <Text style={styles.resultPrice}>${item.price}</Text>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         />
//         </SafeAreaView>
//       );
//     };
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: '#fff',
//       },
//       searchBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#f7f7f7',
//       },
//       searchInput: {
//         flex: 1,
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//       },
//       searchButton: {
//         marginLeft: 10,
//         fontSize: 16,
//         color: '#007bff',
//       },
//       resultItem: {
//         flex: 1,
//         flexDirection: 'row',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//       },
//       resultImage: {
//         width: 50,
//         height: 50,
//         borderRadius: 5,
//       },
//       resultInfo: {
//         flex: 1,
//         marginLeft: 10,
//       },
//       resultTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
//       resultDescription: {
//         fontSize: 14,
//         color: '#666',
//       },
//       resultPrice: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         color: '#007bff',
//       },
//     });

// export default Products;
            