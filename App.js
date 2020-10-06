import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import SleepScreen from './Sleep.js';
import FoodScreen from './Food.js';
import GymScreen from './Gym.js';
import ProfileScreen from './Profile.js';
import HomeScreen from './Home.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

  
  const Stack = createStackNavigator();

  function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initalRouteName= "Home">
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name=  "Sleep" component = {SleepScreen}/>
          <Stack.Screen name=  "Profile" component = {ProfileScreen}/>
          <Stack.Screen name=  "Food" component = {FoodScreen}/>
          <Stack.Screen name=  "Gym" component = {GymScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    position: 'absolute',
    top:300,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  button:{
    position: 'absolute',
    bottom:0,
    backgroundColor:'black',
    padding: 5,
    borderRadius: 5,
  },
  button2:{
    position:'absolute',
    bottom:0,
    left:90,
    backgroundColor:'white',
    padding: 5,
    borderRadius: 5,
  },
  button3:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    left:0,
    padding: 5,
    borderRadius: 5,
  },
  button4:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    right:0,
    padding: 5,
    borderRadius: 5,
  },
  button5:{
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    right:90,
    padding: 5,
    borderRadius: 5,
  },
});
