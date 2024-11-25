import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const ButtonData = [
  { id: 1, text: 'Others' },
  { id: 2, text: 'Women' },
  { id: 3, text: 'Men Clo' },
  { id: 4, text: 'Electronics' },
  { id: 5, text: 'Shirts' },
  { id: 6, text: 'Discounted Items' },
  { id: 7, text: 'Fresh Vegetables' },
//   { id: 8, text: 'Torus' },
//   { id: 9, text: 'Hemisphere' },
//   { id: 10, text: 'Dome' },
];


const SearchHistories = () => {
    return (
      <View style={styles.container}>
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
    );
  };

  const styles = StyleSheet.create({
    container: {
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
  });

  
export default SearchHistories;


// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// const SearchHistories = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text>Welcome to SearchHistories</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default SearchHistories;