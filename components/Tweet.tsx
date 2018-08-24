import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, } from 'react-native';

interface Props {
  tweet: String,
  userName: String,
  userId: String,
  postedBefore: String,
}

interface State { }

export default class Tweet extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  actionForTweet = () => {
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
        <Image source={require('../images/my-icon.png')} style={styles.icon} />
        <View style={styles.tweet}>
          <View style={styles.tweetHeader}>
            <Text style={styles.userName}>{this.props.userName}</Text>
            <Text style={styles.userId}>@{this.props.userId}</Text>
            <Text style={styles.postedBefore}>・{this.props.postedBefore}</Text>
            <TouchableOpacity onPress={this.actionForTweet} style={styles.arrowButton}>
              <Image source={require('../images/bottom-arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tweetBody}>{this.props.tweet}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  tweetHeader: {
    flexDirection: 'row',
  },
  tweet: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  userId: {
    color: '#ccc',
  },
  postedBefore: {
    color: '#ccc',
  },
  arrow: {
    height: 8,
    width: 18,
  },
  tweetBody: {
    paddingRight: 8,
  },
  arrowButton: {
    marginLeft: 'auto',
  },
});
