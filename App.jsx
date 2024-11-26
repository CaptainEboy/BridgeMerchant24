import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchHistory from './components/searchHistory';
import Categories from './components/categories';
import SearchScreenPage from './screens/searchScreen';
import SearchHistories from './components/searchHistories';
import SearchBar from './components/searchBar';
import Products from './components/products';
import TanStackScreenPage from './screens/tanStackScreen';

//Hide header
//https://stackoverflow.com/questions/68694053/remove-header-title-from-react-navigation
//Make Search Bar icon visible
// https://stackoverflow.com/questions/71969890/how-can-i-override-tabbaroptions-and-change-the-color-of-the-navigation-icons
// https://www.npmjs.com/package/react-native-vector-icons#usage-examples
// https://ionic.io/ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Search" component={SearchScreen} />
//       <Tab.Screen name="Trend" component={TrendScreen} />
//       <Tab.Screen name="Order" component={OrderScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        // activeTintColor: '#90EE90',
        headerShown: false,
        tabBarInactiveTintColor: "#000", 
        tabBarActiveTintColor: "green"
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="home-outline" color={focused ? "green" : "#000"} size={size} />
          ),
        }} 
      />
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="search" color={focused ? "green" : "#000"} size={size} />
          ),
        }} 
      />
      <Tab.Screen name="Trend" component={TrendScreen} 
        options={{
          tabBarLabel: 'Trend',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="trending-up-outline" color={focused ? "green" : "#000"} size={size} />
          ),
        }} 
      />
      <Tab.Screen name="Order" component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="reorder-four-outline" color={focused ? "green" : "#000"} size={size} />
          ),
        }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="person-outline" color={focused ? "green" : "#000"} size={size} />
          ),
        }}  
      />
      <Tab.Screen name="TanStack" component={TanStackScreen}
        options={{
          tabBarLabel: 'TanStack',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="person-outline" color={focused ? "green" : "#000"} size={size} />
          ),
        }}  
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
       <SearchHistory />
       <Categories />
    </View>
  );
}


function SearchScreen() {
  const navigation = useNavigation();

  return (  
      <SearchScreenPage /> 
  );
}


function TrendScreen() {
  const navigation = useNavigation();

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Trend Screen</Text>
    //   <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    // </View>
    <SearchHistories />
  );
}


function OrderScreen() {
  const navigation = useNavigation();

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Order Screen</Text>
    //   <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    // </View>
    <SearchBar />
  );
}




function ProfileScreen() {
  const navigation = useNavigation();

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Profile Screen</Text>
    //   <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    // </View>
    <Products />
  );
}

function TanStackScreen() {
  const navigation = useNavigation();

  return (
    <TanStackScreenPage />
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text>Welcome to my React Native app!</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
