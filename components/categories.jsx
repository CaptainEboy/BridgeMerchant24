import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const Categories = () => {
  return (
    <SafeAreaView>

      <View style={styles.firstContentRow}>
            <View style={[styles.fruitCard, { backgroundColor: 'yellow' }]}> 	
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
  );
};

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#fff',
  //   marginHorizontal: 20, //To make anything in that conatiner center alinged 
  //   // justifyContent: 'center', //Aling horizontally to center
  //   // alignItems: 'center',
  // },
  firstContentRow: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: "red",
    flexDirection:"row",
    // alignContent:"space-between",
    justifyContent:"space-between", 
    padding: 2 //For extra space
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  fruitCard: {
    // width: 50,
    // height: 50,
    // textAlign:"center",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "yellow",
    height: responsiveHeight(24),
    width: responsiveWidth(43),
    borderRadius: 15,
    marginBottom: 8,
    borderColor: "red",
    borderWidth: 2,
    // fontSize: responsiveFontSize(5)
  },
  fruitCardText: {
    fontSize: responsiveFontSize(2),
    textAlign:"center",
    fontWeight: "bold",
    marginTop: responsiveHeight(4)
  },
});

export default Categories;

