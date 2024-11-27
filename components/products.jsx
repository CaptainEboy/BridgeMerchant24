import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';

import { Platform } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Pressable } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

  const [searchHistory, setSearchHistory] = useState([]);
 
  useEffect(() => {
    const loadSearchHistory = async () => {
      try {
        const storedSearchHistory = await AsyncStorage.getItem('searchHistory');
        if (storedSearchHistory) {
          setSearchHistory(JSON.parse(storedSearchHistory));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadSearchHistory();
  }, []);


  

  const handleClearSearchHistory = async () => {
    await AsyncStorage.removeItem('searchHistory');
    setSearchHistory([]);
  };



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
  

  const handleSearch = async () => {
    queryClient.invalidateQueries('apiData');
    if (searchQuery.trim() !== '') {
      const newSearchHistory = [...searchHistory, searchQuery];
      setSearchHistory(newSearchHistory);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
      setSearchQuery('');
    }
  };

  

  return (
  
    <SafeAreaView style={styles.container}>
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
                  <Ionicons name="add-outline" color="#fff" size={34} />
                </View>
            </View>
          </SafeAreaView>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
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

              <Pressable onPress={handleSearch}>
                <MaterialCommunityIcons name="tune" size={24} color="green" style={styles.toggleIcon} />
              </Pressable>
            </View>


            <View style={styles.searchTextcontainer}>
              <View>
                <Text style={styles.searchHistory}>Search History</Text>
              </View>
              <Pressable onPress={handleClearSearchHistory}>
                <View style={{marginLeft:-50}}>
                  <Text style={styles.clearSearchHistory}>clear</Text>
                </View>
              </Pressable>
            </View>


            <View style={styles.searchHistoryContainer}>
              <View style={styles.historyContainer}>
                {searchHistory.slice(0, 12).map((item, index) => (
                  <View key={index} style={[styles.historyItem, index % 4 === 0 && { marginLeft: 0 }, index % 4 !== 0 && { marginLeft: 10 }]}>
                    <Text style={styles.historyText}>{item}</Text>
                  </View>
                ))}
              </View>

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
        backgroundColor: '#fff',
        flexDirection:"row",
        justifyContent:"space-between",
      },
      searchHistory: {
        backgroundColor: '#fff',
        fontWeight:"bold",
        fontSize: responsiveFontSize(3)
        
      },
      clearSearchHistory: {
        fontWeight:"500",
        fontSize: responsiveFontSize(2),
        color: "lightgreen",
        marginTop:5
      },


      searchHistoryContainer: {
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




        historyContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: 20,
        },
      
        historyItem: {
          width: '22%',
          height: 50,
          backgroundColor: '#ccc',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        },
        historyText: {
          fontSize: 14,
        },
      
  });
  
    

