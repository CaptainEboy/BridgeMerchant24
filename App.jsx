import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreenPage from './screens/searchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        activeTintColor: 'green',
        headerShown: false,
        tabBarInactiveTintColor: "#000", 
        tabBarActiveTintColor: "lightgreen"
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
            <Ionicons name="search" color={focused ? "lightgreen" : "#000"} size={size} />
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
     
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trend Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}


function OrderScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}




function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


