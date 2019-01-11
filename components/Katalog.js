import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
Hijab Product Center
        </Text>
        <Text>Cremona Hijab</Text>
        <Image style={styles.logo} source={require("../assets/cremona.jpg")}/>
         <Text>
Rp.30.000
        </Text>
        <Text>
Dasya Scraft</Text>
        <Image style={styles.logo} source={require("../assets/dasya_scraft.jpg")}/>
         <Text>
RP.80.000
        </Text>
        <Text>
        Segi Empat Glamour</Text>
        <Image style={styles.logo} source={require("../assets/segiempat_glamour.jpg")}/>
         <Text>
RP.25.000
        </Text>
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
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
