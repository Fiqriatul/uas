//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Katalog from './components/Katalog';
// or any pure javascript modules available in npm


import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#f13256',alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{    fontSize: 20,}}>Selamat Datang Di Hijab Product Center</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#f13256',alignItems: 'center', justifyContent: 'center' }}>
    <Katalog/>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1,  backgroundColor:'#f13256',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aplikasi Ini Dibuat Oleh : </Text>
    <Text>Fiqriatul Qoriah (2015150004)</Text>
        <Text>Saromah (2015150020)</Text>
        
    
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Produk: {
    screen: ProfileScreen,
  },
    Profile: {
    screen: AboutScreen,
  },
});

export default RootTabs;