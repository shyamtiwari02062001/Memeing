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
} from "react-native";
import Home from "./Home";
import Add from "./Add";
import Profile from "./Profile";
import Create from "./Create";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.header}>
        <TextInput
      style={styles.search}
      // onChangeText={text => onChangeText(text)}
    />
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
  header: {
    flex: 1,
    position: "absolute",
    top: 30,
    width: Dimensions.get("window").width,
    alignItems: "center",
    height: "8%",
    justifyContent: "center",
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
