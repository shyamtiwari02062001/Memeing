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
  ActivityIndicator,
  AppRegistry
} from "react-native";
import {Card} from 'react-native-elements'
import Add from "./Add";
import Search from "./Search";
import Create from "./Create";
import Profile from "./Profile";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      number1: 1,
      number2: 1,
      number3: 1,
      data: [],
      like:'../assets/like.png',
      dislike:'',
      isLoading: true
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
    fetch('http://192.168.42.194:5000/post')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.post });
        console.log(this.state);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
 
  render() {
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
    let path="../assets/like.png";
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 37 }}>Memeing</Text>
        </View>
        <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        style={styles.flatlist}
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Card>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={{uri:`${item.photourl}`}} style={{ height:50, width:50, borderRadius:30,marginRight:10 }}/>
                <Text style={{fontSize:17}}>{item.name}</Text>          
            </View>
            <View
            style={{
              marginTop:5,
              borderBottomColor: '#f0ece3',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flex:10,justifyContent:'center',marginTop:10,marginBottom:10}}>
            <Image source={{uri:`${item.photopath}`}} style={{ height:345, width:300 }}/>
          </View>
          <View
            style={{
              marginBottom:5,
              borderBottomColor: '#f0ece3',
              borderBottomWidth: 0.25,
            }}
          />
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity>
                <Image source={require("../assets/like.png")} style={{ height:30, width:30,marginRight:15}}/>      
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../assets/dislike.png")} style={{ height:30, width:30,marginRight:15}}/>      
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../assets/share.png")} style={{ height:30, width:30,marginRight:15}}/>      
            </TouchableOpacity>
            </View>
            </Card>
          )}
        />
      )}
    </View>
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
  flatlist: {
    marginTop: "15%",
    width: Dimensions.get("window").width,
    marginBottom:'20%'
  },
  card:{
    flexWrap: 'wrap',       
    justifyContent: 'space-around',
  }
});

export default Home;
