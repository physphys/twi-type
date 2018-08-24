import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Tweet from './Tweet';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Tweet
            userName='カッパ'
            userId='kappa1234'
            postedBefore='1日'
            replyCount={3}
            retweetCount={5}
            likeCount={7}
            tweet='週1医者バイトで年収4〜500＆共働きで、週6は好きな研究と好きな勉強をする、というライフスタイルを一生やっていくつもりなので、もう生活の土台はほぼ出来上がりつつあるに等しいあとは自分の本当にやりたい研究と学問を見極めて、ブレずに積み重ねていくだけですね'
          ></Tweet>
          <Tweet
            userName='カッパ'
            userId='kappa1234'
            postedBefore='1日'
            replyCount={3}
            retweetCount={590}
            likeCount={7}
            tweet='自分的には、１年で月100万行くぜ！とか言ってがむしゃらにやって燃え尽きる人より、５〜６年かかってでも３０万行けたらいいなあwみたいなゆるい人の方がライバルになりえそうで怖い。'
          ></Tweet>
          <Tweet
            userName='カッパ'
            userId='kappa1234'
            postedBefore='1日'
            replyCount={3}
            retweetCount={5}
            likeCount={7}
            tweet='おはよう'
          ></Tweet>
          <Tweet
            userName='カッパ'
            userId='kappa1234'
            postedBefore='1日'
            replyCount={3}
            retweetCount={5}
            likeCount={7}
            tweet='みなさん勘違いしているんですが、根性はやっぱり大事なんですよ。外国人もできるやつや強い奴はやっぱり根性あるもん。日本だけじゃない。日本の根性論の悪いところは、根性の手前に合理的な手法がないってところ。合理的手法が基盤にあってそこに根性をプラスするのが本当に強いし世界に通用する。'
          ></Tweet>
          <Tweet
            userName='カッパ'
            userId='kappa1234'
            postedBefore='1日'
            replyCount={3}
            retweetCount={5}
            likeCount={7}
            tweet='様々な研究で、小児性愛者はほとんどが覗き型の犯罪に集中し、実際に手を出すのは成人女性の恋人や妻がいて性欲過多な男性がストライクゾーンを広げているというのが何度も何度も立証されているのに、世間では目を背けたいだけですしのう。'
          ></Tweet>
        </ScrollView>
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
