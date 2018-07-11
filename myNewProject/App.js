import React, { Component } from 'react';
import { Alert, Button, TextInput,Text, View,Image, StyleSheet } from 'react-native';
import Divider from 'react-native-divider';

import {Signup} from "./Signup";

import {Login} from "./Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      name:'',
    };
  }
 
  render() {
    return (
      
      <View style={styles.container}>
      
      		<Login></Login>
              <Signup></Signup>
      
     </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    
  },


   
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    marginTop: '5%'
  },
});
