import React from 'react'
import { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={styles.container}>
          <Header></Header>
          <Main></Main>
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
