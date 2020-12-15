import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';
import {SafeAreaView } from 'react-native';

class GymScreen extends React.Component{
  static navigationOptions = {
    title: 'Gym',
  };
  render(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source= {{uri : 'https://wallpaperaccess.com/full/722350.jpg'}} style ={{width:500,height:800}}>
        </ImageBackground>
      <Text style = {styles.pic}>Workouts</Text>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Cardio')} style = {styles.cardioButton}>
      <Image source = {{uri: 'https://www.publicdomainpictures.net/pictures/180000/nahled/blue-heart-14656901782rZ.jpg'}} style = {{width:100, height:100,}}/>
      <Text style ={styles.caption}>       Cardio</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Strength')} style = {styles.strengthButton}>
    <Image source = {{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/kJD/7+//MzP/6Oj/IyP/Wlr/trb/qan/T0//4OD/rKz/s7P/UlL/7Oz/4+P/19f/KSn/Q0P/HR3/EBD/9PT/nZ3/YWH/mZn/+vr/0ND/tLT/8/P/bm7/fHz/bGz/wMD/iIj/xsb/Ly//Ozv/Skr/Zmb/pKT/dXX/e3v/V1f/1NT/Fhb/k5P/iopYx+cOAAAE10lEQVR4nO2d63qiMBRFSVFBqKB4Qyhj0fE21vr+bzdoB0cJkigHS+xev5Ht+pQAyUmiaQAAAAAAAAAAAAAAAAAAAAAAAAAAAFRGEJpvnZQ380gcx6FNnGOH8zj+Ov15XhgQ53D09n3GMRy2GsbEJYxxx8aitRvyUf3ZB2EMTxAv+dCUTZcsp/nnekzfrPJnDL3ryYz9ahLFuJuimNacKCaHbqMombGpThITzYpjPOpr/j+/ipMZW1P8gYJXUYxPkJLLXJTMfIrWRn8X5sQEMXm8iA0p/qa68K/CXghi8oAhDCWB4RMYitvS7zN0SO4WPgxheDdPZjjqzTvr8SRhnD5s1s8wOH7Bybhthre2caHjtQa74QHG0g/Xz1A/vH0f2A287S0Pq8Fley1vaFEYusYthmf4I+mI1eX55A37FO/ArnOnIdtKxgfZF1BlDNlG7mqcZ9/k1TFsdWQCgn32fOoYsmkkEWBvFTZ0ehIB898lDEna0hKGjVAiIB7cb7gg+Q0L+mRFhjuZm6LJ9TTLGzYoDJs5veqyhsyUMeQ+pZKhTGP6/IYdpQ1fYZjA96k/2NAtY9iu2NCjGGBrLp7eUDDCBUMYwvCnG1KMP1du2C5hOKAw7BaWQ8AQhjCEIQxlsOtsOJTpzBMacl1hMIQhDGH4swwpirBrbchkBkZE9HIK2GEIQxg+mWGZfhpG0ZaWMrw+bjGKdNdtdrt2j/e4wfDTLM+kjOFLz+52m66rRxflQ0F75VjLfr+/WCwarTKGg1Z5xLfDAsNWI3FITJaWs1qfJLurnJPcZ/ggrhte4P97XeXLSzIoa8is41NkVDBP7At1Ddn7ofyFH7fPorAhWyetjHjEVWVDb6T1xOdT2TB5BuELEziUNhxrE/FBShvuNa7Wkkdpw6kmmJF6QHHDqfggGD4eGJ7xE67D529LJb624oZr8UFKG35qofggpQ1jLRIfpLShqwXi24XKhptA0z6EXVsqGx46cIOx6CiFDT+P819Hom+uruEsnehlOnwn6RmKGg6szv/lcnRztnlfrXzfMBy+9vGGEVLHKI9Tps+7YRmG769W75tZJzPNLPjq12/anyUMf38kZyiJ+8FNnrvBcN9rfvXpF6x29O3zLUpV0I4lAsqMrtXAUGKlKhjCEIYwLGe4lghQ+25RdaUCDGEIQxjC8BkMlZitDkMYwvAHGH7/yh8whCEMYQjD+hu+KW2oxmpmMIQhDFUwnDy9YToOCsN85tzCGwoZDmRWaNW5eVAKGW6klvkNs+sWqmPYkNzOa50paFHGcCgzPnokU1KjjOFefsuw2Dv/GdUwHHoyqySfiNqnMrCtlZa/1ccwHcuOrG1a5DVd372Lz+g0X7g+hqe73kh6wwcpamhIDAxhKImE4U2t5g3Ux/D7dnh8lGFVe63Wx5BikZg86mNIsaRYHo8yFNd5V7VdLl+1mIVmjxLxKg90u0dfogunCUxI9gMWTuLZVbZvtWgr4j7N9WFbghyZItL7iIr3fGtR3Yjj4jVaDZlNne6kcLEej2TP6gPBa1FjY1XVkh6xp1dnSC0pH6Xiq3s+Df5UKpj8UeO9YeWw3NMG917yUqztLKbZv72IUdfOg/ZVNInJTbErvAQBAAAAAAAAAAAAAAAAAAAAAAAAAICQvy8PjyHThCexAAAAAElFTkSuQmCC'}} style = {{width:100, height:100,}}/>
      <Text style = {styles.caption}>      Strength</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Featured')} style = {styles.featureButton}>
    <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png'}} style = {{width:100, height:100,}}/>
      <Text style = {styles.caption}>      Featured</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Other')} style = {styles.otherButton}>
    <Image source = {{uri: 'https://cdn0.iconfinder.com/data/icons/user-interface-255/100/more-512.png'}} style = {{width:100, height:100,}}/>
      <Text style = {styles.caption}>         Other</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Log')} style = {styles.logButton}>
      <Text style = {styles.caption}>                              View Log</Text>
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

export default GymScreen;
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
  cardioButton:{
    position:'absolute',
    top: 125,
    backgroundColor:'white',
    left:40,
    padding: 25,
    borderRadius: 50,
  },
  strengthButton:{
    position:'absolute',
    top: 125,
    backgroundColor:'white',
    right:40,
    padding: 25,
    borderRadius: 50,
  },
  featureButton:{
    position:'absolute',
    top: 325,
    backgroundColor:'white',
    left:40,
    padding: 25,
    borderRadius: 50,
  },
  otherButton:{
    position:'absolute',
    top: 325,
    backgroundColor:'white',
    right:40,
    padding: 25,
    borderRadius: 50,
  },
  logButton:{
    position: 'absolute',
    backgroundColor:'white',
    width:325,
    bottom: 125,
    padding: 25,
    borderRadius: 50,
  },
  caption:{
    alignContent:'center',
    fontWeight:'bold',
  },
});
