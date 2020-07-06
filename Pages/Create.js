
import React, { Component } from 'react'
import {View,StyleSheet,Dimensions,Text,TouchableOpacity,Image} from "react-native"
import Home from './Home'
import Profile from './Profile'
import Add from './Add'
import Search from './Search'

export class Create extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:1,
             number1:1,
             number2:1,
             number3:1,
        }
    }
    clickHandler=()=>{
        this.setState({
            number:2
        })
    }

    clickHandler1=()=>{
        this.setState({
            number1:2
        })
    }
    clickHandler2=()=>{
        this.setState({
            number2:2
        })
    }
    clickHandler3=()=>{
        this.setState({
            number3:2
        })
    }
    render() {
        if(this.state.number===2){
            return(<Home/>)
        }

        if(this.state.number1===2){
            return(<Add/>)
        }
        if(this.state.number2===2){
            return(<Search/>)
        }
        if(this.state.number3===2){
            return(<Profile/>)
        }

    return (
         <View style={styles.footer}>
        <TouchableOpacity onPress={this.clickHandler}>
              
          <Image source={require('../assets/home.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.clickHandler1}
          >
          <Image source={require('../assets/add.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this.clickHandler2}>
          <Image source={require('../assets/search.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <TouchableOpacity
         
          ><Text>Create</Text>
          <Image source={require('../assets/create.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clickHandler3}
          style={styles.button}
          >
          <Image source={require('../assets/profile.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
      </View>
    )
}
}

const styles = StyleSheet.create({
footer: {
  flex: 1,
  flexDirection:'row',
  paddingHorizontal: 10,
  position:'absolute',
  bottom:3,
  height:'8%',
  alignItems:'center',
  backgroundColor: "#DDDDDD",
  justifyContent:'space-around',
  width: Dimensions.get('window').width
}
});


export default Create
