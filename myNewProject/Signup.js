import React, { Component } from 'react';
import { Alert, Button, TextInput,Text, View,Image, StyleSheet } from 'react-native';
import Divider from 'react-native-divider';

export  class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      name:'',
    };
  }
  
  onLogin() {
    
    Alert.alert('User Suceessfully Login');
    

  }
  onLogin1() {
    const { name } = this.state;

    Alert.alert('User_Profile', `${name}`);


  }
  render() {
    return (
      
      <View style={styles.container}>
      
                  <Image
          source={{
            uri: 'https://facebook.github.io/react/logo-og.png',}}
          style={{width: 100, height: 100}}
/>
    
         <Text>
           Registration form
        </Text>
        <TextInput
        onChangeText={(name) => this.setState({ name })}
          placeholder={'name'}
          style={styles.input}
        />
      <Button
  onPress={this.onLogin1.bind(this)}
  title="Submit"
  color="#841584"
/>
       
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
