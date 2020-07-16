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
import Home from "./Home";
import Add from "./Add";
import Search from "./Search";
import Create from "./Create";
export class Profile extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
         <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View >
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>            
            <Image source={{uri:`${item.photourl}`}} style={{ height:250, width:250 }}/>
            </View>
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
    alignItems:'center'
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 3,
    height: "8%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
  },
});

export default Profile;
