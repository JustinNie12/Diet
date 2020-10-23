import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View,ScrollView } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';


class CardioScreen extends React.Component{
  static navigationOptions = {
    title: 'Cardio',
  };
  render(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source= {{uri : 'https://wallpaperaccess.com/full/722350.jpg'}} style ={{width:500,height:800}}>
        </ImageBackground>
      <Text style = {styles.pic}>Cardio Workouts</Text>
    
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Gym')} style = {styles.back}>
      <Image source ={{uri:'data:image/png;base64,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'}} style = {{width:30,height:30}}/>
    </TouchableOpacity>
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
export default CardioScreen;
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
  back:{
    position:'absolute',
    left:50,
    backgroundColor:'white',
    top:45,
    padding:5,
    borderRadius:5,
  },
});
