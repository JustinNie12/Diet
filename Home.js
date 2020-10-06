import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';


class HomeScreen extends React.Component{
  static navigationOptions = {
    title : 'Home',
  };
  render(){
    return (
    <View style={styles.container}>
      <View>
        <ImageBackground source= {{uri : 'https://www.guide19.com/wp-content/uploads/2019/07/cf7d6afd57a0189325c7724b2cfcfc98.jpg'}} style ={{width:500,height:800}}>
        </ImageBackground>
      </View>
        <Image source = {{uri: "https://i.pinimg.com/736x/cd/46/86/cd46868fc84c9c1fd5927fe0e1a3eadd.jpg"}} style={styles.pic}/>
        <Text style = {{color: 'red', fontSize: 50, position: 'absolute', top:400,}}>
        This is an app that keeps you healthy!
        </Text>

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
      <StatusBar style="auto" />
    </View>
  );
}}
export default HomeScreen;
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
