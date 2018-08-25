import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import Tweet from './Tweet';

interface Props {
  tweets: Array<any>,
  onUpdateTweet: void,
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
            tweet={item.tweet}
            userName={item.userName}
            userId={item.userId}
            postedBefore={item.postedBefore}
            replyCount={item.replyCount}
            retweetCount={item.retweetCount}
            likeCount={item.likeCount}
            isLiked={item.isLiked}
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
