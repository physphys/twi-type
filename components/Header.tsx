import React from 'react'
import { Component } from 'react';
import { Alert, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Header extends Component {
  openProfile = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openProfile}>
          <Image source={require('../images/my-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text}>ホーム</Text>
        <TouchableOpacity onPress={this.openProfile}>
          <Image source={require('../images/pencil.png')} style={styles.pencil} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pencil: {
    height: 35,
    width: 35,
    resizeMode: 'cover',
    borderColor: '#ccc',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
