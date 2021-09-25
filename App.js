import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Background from './src/files/background.svg';
import { SvgXml } from 'react-native-svg';
const App = () => {
  return (
    <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "red" }}>
      <Background />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
