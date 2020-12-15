import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity,ImageBackground, Image, StyleSheet, Text, View,ScrollView, TextInput } from 'react-native';
import home from './assets/home.png';
import sleep from './assets/sleep.png';


  //export const DurationTextInput = props =>{
  //const[value, onChangeText] = React.useState('PlaceHolder');
  
 /* return(
    <View style = {{position:'absolute',top:200,left:50}}>
    <TextInput style = {{width:200,height:200}} keyboardType = 'number-pad'
    value = {value} onChangeText = {text => onChangeText(text)} placeholder={'blank'}/>
    </View>
      
  );
}
/*
export const DurationTextInputMultiline = ()=>{
  const[value, onChangeText] = React.useState('PlaceHolder');

  return(<View style = {{backgroundColor:'gray',borderBottomColor:'black',borderWidth:5,position:'absolute', top:150,left:200}}>
  <DurationTextInput
  style = {styles.textInput}
  multiline
  numberOfLines = {4}
  keyboardType = 'numeric'
  value = {value}
  placeholder = {'blank'}
  onChangeText = {text => onChangeText(text)}
  />
  </View>
  );
}*/ 
 export  class CardioScreen extends React.Component{

  state={
    workout: '0',
    duration:'0',
    distance:'0',
    pressed:false,
    backgroundColor1:'white',
    backgroundColor2:'white',
    backgroundColor3:'white',
    backgroundColor4:'white',
  };
  setWorkout(x){
    if(x ==1){
      this.setState({pressed:true,backgroundColor1:'gray',backgroundColor2:'white',backgroundColor3:'white',backgroundColor4:'white',workout:x})
      alert(x);}
    if(x ==2){
      this.setState({pressed:true,backgroundColor2:'gray',backgroundColor1:'white',backgroundColor3:'white',backgroundColor4:'white',workout:x})
      alert(x);}
    if(x ==3){
      this.setState({pressed:true,backgroundColor3:'gray',backgroundColor2:'white',backgroundColor1:'white',backgroundColor4:'white',workout:x})
      alert(x);}
    if(x ==4){
        this.setState({pressed:true,backgroundColor4:'gray',backgroundColor2:'white',backgroundColor3:'white',backgroundColor1:'white',workout:x})
        alert(x);}
    }
  showAll(){
    alert(this.state.workout + this.state.duration + this.state.distance);
  }
    onTextChanged(text){
      this.setState({duration:text})
    }
    /*durationTextInput(){
    const[value, onChangeText] = React.useState('PlaceHolder');
    }*/

  static navigationOptions = {
    title: 'Cardio',
  };
  render(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source= {{uri : 'https://wallpaperaccess.com/full/722350.jpg'}} style ={{width:500,height:800}}>
        </ImageBackground>
      <Text style = {styles.pic}>Cardio Workouts</Text>

      <View style = {{position:'absolute',left:200,top:250, backgroundColor:'white'}}>
    <TextInput style = {{width:200,height:50}} keyboardType = 'numeric' returnKeyType="done"
    value = {this.state.duration} onChangeText = {text => this.setState({duration: text})} placeholder={'blank'}/>
    </View>
    <View style = {{position:'absolute',left:200,top:350, backgroundColor:'white'}}>
    <TextInput style = {{width:200,height:50}} keyboardType = 'numeric' returnKeyType="done"
    value = {this.state.distance} onChangeText = {text => this.setState({distance: text})} placeholder={'blank'}/>
    </View>

    <Text style = {{position:'absolute',left:0,top:250,backgroundColor:'white', fontSize:40}}>Duration: </Text>
    <Text style = {{position:'absolute',left:0,top:350,backgroundColor:'white', fontSize:40}}>Distance: </Text>
    <Text style = {{position:'absolute',right:0,top:275,backgroundColor:'white', fontSize:20}}>Minutes</Text>
    <Text style = {{position:'absolute',right:0,top:375,backgroundColor:'white', fontSize:20}}>Miles</Text>



    <TouchableOpacity style ={{backgroundColor:'green',padding:10,borderRadius:5,position:'absolute',bottom:100,width:100, height:50}} onPress= {()=>this.showAll()}>
      <Text style = {styles.text}>  Enter</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {{backgroundColor:this.state.backgroundColor1,padding:10,borderRadius:5,position:'absolute',left:10, top:100}} onPress = {()=>this.setWorkout(1)}>
      <Text style = {styles.text}>Walking</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{backgroundColor:this.state.backgroundColor2,padding:10,borderRadius:5,position:'absolute',left:110, top:100}} 
    onPress = {()=>this.setWorkout(2)}>
      <Text style = {styles.text}>Running</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{backgroundColor:this.state.backgroundColor3,padding:10,borderRadius:5,position:'absolute',left:210, top:100}} 
    onPress = {()=>this.setWorkout(3)}>
      <Text style = {styles.text}>Biking</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{backgroundColor:this.state.backgroundColor4,padding:10,borderRadius:5,position:'absolute',left:290, top:100}} 
    onPress = {()=>this.setWorkout(4)}>
      <Text style = {styles.text}>Swimming</Text>
    </TouchableOpacity>

    
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
  text:{
    fontWeight:'bold',
    fontSize:20,
  },
  textInput:{
    height:50,
    width:50,
    borderColor:'gray',
    borderWidth:1,
  },
});
