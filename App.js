import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import SleepScreen from './Sleep.js';
import FoodScreen from './Food.js';
import GymScreen from './Gym.js';
import ProfileScreen from './Profile.js';
import HomeScreen from './Home.js';
import {CardioScreen} from './Cardio.js';
import StrengthScreen from './Strength.js';
import OtherScreen from './Other.js';
import LogScreen from './Log.js';
import FeaturedScreen from './Featured.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


  const Stack = createStackNavigator();

  function App(){
    return(
      <SafeAreaProvider>
      <NavigationContainer> 
        <Stack.Navigator initalRouteName= "Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name=  "Sleep" component = {SleepScreen}/>
          <Stack.Screen name=  "Profile" component = {ProfileScreen}/>
          <Stack.Screen name=  "Food" component = {FoodScreen}/>
          <Stack.Screen name=  "Gym" component = {GymScreen}/>
          <Stack.Screen name= "Cardio" component = {CardioScreen}/>
          <Stack.Screen name = "Strength" component = {StrengthScreen}/>
          <Stack.Screen name = "Other" component = {OtherScreen}/>
          <Stack.Screen name = "Log" component = {LogScreen}/>
          <Stack.Screen name = "Featured" component = {FeaturedScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
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
