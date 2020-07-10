import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import Home from "./Pages/Home";
import axios from 'axios';
export default class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
    };
  }
  componentDidMount(){
    axios.get('https://memesap.herokuapp.com/')
    .then((response) => {
      console.log(response.data);
     
      
    });
   
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "265455786512-dthodismibrhetj7c35ot274083a8hga.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email:result.user.email
        });
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage  name={this.state.name} photoUrl={this.state.photoUrl} email={this.state.email}/>
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const LoginPage = (props) => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};

const LoggedInPage = (props) => {
  console.log(props.name)
  return <Home name={props.name} photoUrl={props.photoUrl} email={props.email}  />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
  },
  footer: {
    flex: 1,
    width: 450,
  },
});
