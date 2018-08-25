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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <Header></Header>
          <Main tweets={tweets}></Main>
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

let tweets = [
  {
    id: 1,
    userName: 'カッパ',
    userId: 'kappa1234',
    postedBefore: '1日',
    replyCount: 3,
    retweetCount: 5,
    likeCount: 70,
    isLiked: true,
    tweet: '週1医者バイトで年収4〜500＆共働きで、週6は好きな研究と好きな勉強をする、というライフスタイルを一生やっていくつもりなので、もう生活の土台はほぼ出来上がりつつあるに等しいあとは自分の本当にやりたい研究と学問を見極めて、ブレずに積み重ねていくだけですね',
  },
  {
    id: 2,
    userName: 'カッパ',
    userId: 'kappa1234',
    postedBefore: '1日',
    replyCount: 30,
    retweetCount: 5,
    likeCount: 7,
    isLiked: false,
    tweet: '自分的には、１年で月100万行くぜ！とか言ってがむしゃらにやって燃え尽きる人より、５〜６年かかってでも３０万行けたらいいなあwみたいなゆるい人の方がライバルになりえそうで怖い。',
  },
  {
    id: 3,
    userName: 'カッパ',
    userId: 'kappa1234',
    postedBefore: '1日',
    replyCount: 3,
    retweetCount: 25,
    likeCount: 7,
    isLiked: false,
    tweet: 'みなさん勘違いしているんですが、根性はやっぱり大事なんですよ。外国人もできるやつや強い奴はやっぱり根性あるもん。日本だけじゃない。日本の根性論の悪いところは、根性の手前に合理的な手法がないってところ。合理的手法が基盤にあってそこに根性をプラスするのが本当に強いし世界に通用する。',
  },
  {
    id: 4,
    userName: 'カッパ',
    userId: 'kappa1234',
    postedBefore: '1日',
    replyCount: 3,
    retweetCount: 5,
    likeCount: 7,
    isLiked: false,
    tweet: 'おはよう',
  },
  {
    id: 5,
    userName: 'カッパ',
    userId: 'kappa1234',
    postedBefore: '1日',
    replyCount: 3,
    retweetCount: 5,
    likeCount: 7,
    isLiked: false,
    tweet: '様々な研究で、小児性愛者はほとんどが覗き型の犯罪に集中し、実際に手を出すのは成人女性の恋人や妻がいて性欲過多な男性がストライクゾーンを広げているというのが何度も何度も立証されているのに、世間では目を背けたいだけですしのう。',
  },
]
