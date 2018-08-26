import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  tweets: {
    id: Number,
    body: String,
    user_name: String,
    user_id: Number,
    created_at: String,
    reply_count: Number,
    retweet_count: Number,
    like_count: Number,
    is_liked: Boolean,
  }[],
}

interface State {
  isLiked: Boolean,
}

export default class Tweet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLiked: false,
    }
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
              <FontAwesome5 name="angle-down" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tweetBody}>{this.props.tweet}</Text>
          <View style={styles.tweetFooter}>
            <View style={styles.tweetAction}>
              <TouchableOpacity style={styles.tweetActionButton}>
                <FontAwesome5 name={'comment'} size={15} />
              </TouchableOpacity>
              <Text>{this.props.replyCount}</Text>
            </View>
            <View style={styles.tweetAction}>
              <TouchableOpacity style={styles.tweetActionButton}>
                <FontAwesome5 name={'retweet'} size={15} />
              </TouchableOpacity>
              <Text>{this.props.retweetCount}</Text>
            </View>
            <View style={styles.tweetAction}>
              <TouchableOpacity style={styles.tweetActionButton} onPress={() => this.setState({ isLiked: !this.state.isLiked })}>
                {this.state.isLiked ? <FontAwesome5 name={'heart'} size={15} solid /> : <FontAwesome5 name={'heart'} size={15} />}
              </TouchableOpacity>
              <Text>{this.props.likeCount}</Text>
            </View>
            <View style={styles.tweetAction}>
              <TouchableOpacity style={styles.tweetActionButton}>
                <FontAwesome5 name={'share-alt'} size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderBottomWidth: 0.5,
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
  tweetBody: {
    paddingRight: 8,
    paddingBottom: 10,
  },
  arrowButton: {
    marginLeft: 'auto',
  },
  tweetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  tweetAction: {
    flexDirection: 'row',
  },
  tweetActionButton: {
    marginRight: 3,
  },
});
