import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';


class StrengthScreen extends React.Component{
  static navigationOptions = {
    title: 'Strength',
  };
  render(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source= {{uri : 'https://wallpaperaccess.com/full/722350.jpg'}} style ={{width:500,height:800}}>
        </ImageBackground>
      <Text style = {styles.pic}>Strength</Text>
    
    <TouchableOpacity onPress= {() => this.props.navigation.navigate('Home')} style = {styles.button}>
    <Image source = {home} style = {{width:50,height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Sleep')} style = {styles.button2}>
      <Image source = {sleep} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Food')} style = {styles.button3}>
      <Image source = {{uri:'https://i.pinimg.com/originals/01/be/7e/01be7eb316abb4dd89675274dbc0cd21.jpg'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Profile')} style = {styles.button4}>
      <Image source = {{uri:'https://image.flaticon.com/icons/png/512/16/16363.png'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Gym')} style = {styles.button5}>
      <Image source = {{uri:'https://static.thenounproject.com/png/5250-200.png'}} style = {{width:50, height:50,}}/>
    </TouchableOpacity>
    </View>
  )
}}
export default StrengthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    fontSize: 20,
    color:'black',
    position: 'absolute',
    top:50,
    fontWeight: 'bold',
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
