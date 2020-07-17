import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import {Card} from 'react-native-elements'
import Home from "./Home";
import Add from "./Add";
import Search from "./Search";
import Create from "./Create";
export class Profile extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      postData:[],
      isLoading: true,
      number: 1,
      number1: 1,
      number2: 1,
      number3: 1,
    };
  }
  clickHandler = () => {
    this.setState({
      number: 2,
    });
  };

  clickHandler1 = () => {
    this.setState({
      number1: 2,
    });
  };
  clickHandler2 = () => {
    this.setState({
      number2: 2,
    });
  };
  clickHandler3 = () => {
    this.setState({
      number3: 2,
    });
  };
  
  componentDidMount(){
    fetch('http://192.168.42.194:5000/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.profile });
        console.log(...this.state.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      fetch('http://192.168.42.194:5000/postDetails')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ postData: json.post });
        console.log(...this.state.postData);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
 
  render() {
    if (this.state.number === 2) {
      return <Home />;
    }
    if (this.state.number1 === 2) {
      return <Add />;
    }
    if (this.state.number2 === 2) {
      return <Search />;
    }
    if (this.state.number3 === 2) {
      return <Create />;
    }
    const { data, isLoading,postData } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View style={{marginTop:10,marginBottom:'15%'}}>
         <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
              <Card style={styles.flatList}>  
              <View style={{flexDirection:'row',alignItems:"center"}}>
            <Image source={{uri:`${item.photourl}`}} style={{ height:100, width:100,borderRadius:50 }}/>
            <Text style={{fontSize:20,marginLeft:30,marginRight:50}}>{item.name}</Text>          
            </View>
            <View
            style={{marginTop:10,borderBottomColor:'black',borderBottomWidth:0.25}}
            />
           </Card>
          )}
          
        />
      )}
    </View>
    
    <View style={{flex:2.8,flexDirection:"row"}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        style={{padding:20}}
          data={postData}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
              <Card style={styles.container}>  
              <View style={{justifyContent:"center",alignItems:"center"}}>
            <Image source={{uri:`${item.photopath}`}} style={{ height:200, width:200 }}/>
            </View>
           </Card>
          )}
        />
      )}
    </View>
    </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.clickHandler}>
            <Image
              source={require("../assets/home.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clickHandler1}>
            <Image
              source={require("../assets/add.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clickHandler2}>
            <Image
              source={require("../assets/search.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clickHandler3}>
            <Image
              source={require("../assets/create.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/profile.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 0,
    height: "8%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
  },
});

export default Profile;
