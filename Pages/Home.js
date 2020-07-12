import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import Add from "./Add";
import Search from "./Search";
import Create from "./Create";
import Profile from "./Profile";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "2",
    title: "ShyamJi",
  },
  {
    id: "3",
    title: "ShyamTiwari",
  },
  {
    id: "4",
    title: "Shyam",
  },
  {
    id: "6",
    title: "Shyam",
  },
  {
    id: "7",
    title: "Shyam",
  },
  {
    id: "8",
    title: "Shyam",
  },
  {
    id: "9",
    title: "Shyam",
  },
  {
    id: "10",
    title: "Shyam",
  },
  {
    id: "11",
    title: "Shyam",
  },
  {
    id: "12",
    title: "Shyam",
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Card style={styles.card}>
      <Text>{title}</Text>
    </Card>
  </View>
);
export class Home extends Component {
   
  
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
    const renderItem = ({ item }) => <Item title={item.title} />;
    if (this.state.number === 2) {
      return <Add />;
    }

    if (this.state.number1 === 2) {
      return <Search />;
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
          <Text style={{ fontSize: 37 }}>Memeing</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image
              source={require("../assets/home.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clickHandler}>
            <Image
              source={require("../assets/add.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.clickHandler1}>
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
          <TouchableOpacity onPress={this.clickHandler3} style={styles.button}>
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
    top: 0,
    backgroundColor: "#DDDDDD",
    width: Dimensions.get("window").width,
    alignItems: "center",
    height: "8%",
    justifyContent: "center",
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
  card: {},
  flatlist: {
    marginTop: "15%",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Home;
