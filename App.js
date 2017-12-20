import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

export default class App extends React.Component{
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBjnGc1Lr9KICTXmhd2IRgrqVM59b1QtPw',
      authDomain: 'react-native-authenticat-51a8e.firebaseapp.com',
      databaseURL: 'https://react-native-authenticat-51a8e.firebaseio.com',
      projectId: 'react-native-authenticat-51a8e',
      storageBucket: 'react-native-authenticat-51a8e.appspot.com',
      messagingSenderId: '1063894589570'
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
          <Header headerName='react-native-authentication' headerStyle={styles.headerStyle} fontStyle= {styles.textStyle} />
          <LoginForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  containerStyle: {
    flex: 1
  }
});