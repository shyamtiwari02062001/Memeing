import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  FlatList
} from "react-native";
import {Card} from 'react-native-elements'
import Home from "./Home";
import Add from "./Add";
import Profile from "./Profile";
import Create from "./Create";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      number: 1,
      number1: 1,
      number2: 1,
      number3: 1,
      search:'',
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
  search=(inputText)=>{
    this.setState({
      search:inputText,
    })
    this.makeSearch();
  }
  makeSearch=()=>{
    console.log(this.state.search)
    fetch('http://192.168.42.194:5000/searchData/', {
	method: 'POST',
	body: JSON.stringify({
    search:this.state.search,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
})
  fetch('http://192.168.42.194:5000/search')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.profile });
        console.log(this.state.data);
      })
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
      return <Create />;
    }
    if (this.state.number3 === 2) {
      return <Profile />;
    }
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.header}>
        <TextInput
      style={styles.search}
      value={this.state.search}
      onChangeText={this.search}
    />
        </View>
        <View style={{flex:2.8,marginTop:'25%',marginBottom:'16%'}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        style={{padding:20}}
          data={data}
          keyExtractor={(item, index) => String(index)}
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
        <TouchableOpacity>
          <Image
            source={require("../assets/search.png")}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clickHandler2}>
          <Image
            source={require("../assets/create.png")}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clickHandler3}>
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
  },
  header: {
    flex: 1,
    position: "absolute",
    top: 30,
    width: Dimensions.get("window").width,
    alignItems: "center",
    height: "8%",
    justifyContent: "center",
    marginBottom:50,
  },
  search:{ 
  width: '80%',
  borderRadius:20,
  height: 40, 
  borderColor: 'gray', 
  borderWidth: 1 ,
  paddingLeft:20,
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

export default Search;
