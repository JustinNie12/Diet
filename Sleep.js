import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';

const getCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();


  return month + '/' + date + '/' + year;
}
  class SleepScreen extends React.Component{
    state={
      hoursSlept: '0',
    };
    static navigationOptions = {
      title: 'Sleep',
    };
    getSleep(){
      alert(this.state.hoursSlept);
    }
    render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={{uri:'https://cutewallpaper.org/21/night-background-hd/night-sky-stars-wallpaper-background-phone-hd-in-2019-.jpg'}}style ={{width:500,height:800}}></ImageBackground>
        <Text style = {styles.pic}>Sleep</Text>

        <View style ={{top:100, position:'absolute'}}>
        <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatF9Sw219aEVYy8W-Kk-umm6JOs5JlTIOGw&usqp=CAU'}} style={{width:400,height:250,borderRadius:30,}}></Image>
        <Text style={{color:'white',fontSize:30,position:'absolute',top:50,fontWeight:'bold'}}>{getCurrentDate()}</Text>
        <Text style={{color:'white',fontSize:40,position:'absolute',top:120,fontWeight:'bold'}}>Hours slept:_______</Text>
        <TouchableOpacity onPress = {()=>this.getSleep()} style = {{position:'absolute', top:200,left:180,width:70,height:50,borderRadius:5,alignItems:'center',backgroundColor:'green'}}>
          <Text style ={{fontWeight:'bold', fontSize:30,color:'white'}}>Enter</Text>
        </TouchableOpacity>
        </View>
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
  export default SleepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    fontSize: 20,
    color:'white',
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
