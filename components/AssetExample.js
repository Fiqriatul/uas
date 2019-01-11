import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
 Menampilkan Informasi Tentang Hijab Dan Harganya
         </Text>
                 <Text style={styles.paragraph}>
Silahkan kunjungi produk kami untuk melihat berbagai model hijab yang berkualitas dengan harga yang pas di kantong
         </Text>
        <Image style={styles.logo} source={require("../assets/hijab.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 0,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#f13256",
    height: 128,
    marginTop:35,
    width: 128,
  }
});
