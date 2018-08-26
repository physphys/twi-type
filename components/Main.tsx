import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import Tweet from './Tweet';

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

interface State { }

export default class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tweets}
          renderItem={({ item }) => <Tweet
            id={item.id}
            tweet={item.body}
            userName={item.user_name}
            userId={item.user_id}
            postedBefore={item.created_at}
            replyCount={item.reply_count}
            retweetCount={item.retweet_count}
            likeCount={item.like_count}
            isLiked={item.is_liked}
          ></Tweet>}
          keyExtractor={item => item.id.toString()}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: 'white',
    width: '100%',
  },
  scrollContainer: {
    width: '100%',
  },
});
