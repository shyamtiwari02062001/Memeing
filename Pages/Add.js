import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Text
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Home from "./Home";
import Search from "./Search";
import Create from "./Create";
import Profile from "./Profile";
class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      number1: 1,
      number2: 1,
      number3: 1,
      submit:1,
      image:null
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
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
postImage=()=>{
  fetch('https://memesap.herokuapp.com/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.profile });
        console.log(...this.state.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      this.setState({
        submit:2
      })
}
  render() {
    if (this.state.submit === 2) {
      return <Home />;
    }
    if (this.state.number === 2) {
      return <Home />;
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
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <View>
        <View style={{justifyContent:'center',alignItems:'center',padding:30}}>
        <TouchableHighlight
      style={{
        width: Dimensions.get("window").width,
        padding:'5%',
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      }}
      onPress={this._pickImage}
      underlayColor='#fff'>
        <Text style={styles.submitText}>Browse an image</Text>
    </TouchableHighlight>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',padding:30}}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:'10%'}}>
        <TouchableHighlight
      style={{
        width: '30%',
        padding:10,
        justifyContent:'center',
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      }}
      onPress={this.postImage}
      underlayColor='#fff'>
        <Text style={styles.submitText}>Submit</Text>
    </TouchableHighlight>
    </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={this.clickHandler}>
          <Image
            source={require("../assets/home.png")}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
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
      </View>
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
  submit1:{
    padding:'5%',
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:20
  }
});

export default Add;
