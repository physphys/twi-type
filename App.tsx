import React from 'react'
import { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from 'axios';

interface State {
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

type Props = {};
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tweets: [],
    }
  }

  componentDidMount() {
    this.fetchTweets()
  }

  fetchTweets = () => {
    axios
      .get('http://localhost:3000/tweets')
      .then((results) => {
        this.setState({ tweets: results.data })
      })
      .catch((error) => { console.log('failed to fetch tweets') })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <Header></Header>
          <Main tweets={this.state.tweets} onUpdateTweet={this.fetchTweets}></Main>
          <Footer></Footer>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
