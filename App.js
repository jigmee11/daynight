// import React, { useRef } from 'react';
// import { View, StyleSheet, Text, ImageBackground, Animated } from 'react-native';
// import Background from './src/files/background.svg';
// import Sun from './src/files/sun.svg';
// import { SvgXml } from 'react-native-svg';
// const App = () => {
//   const sun = useRef(new Animated.Value(0)).current;
//   return (
//     <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "red" }}>
//       <Background />
//       {/* <Ami /> */}
//     </View>
//   );
// };

// export default App;
// const styles = StyleSheet.create({});

import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(translation, {
        toValue: { x: 290, y: 350 },
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: { x: 0, y: 650 },
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translation]);
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.animation,
          {
            transform: [
              { translateX: translation.x },
              { translateY: translation.y },
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animation: { backgroundColor: 'deeppink', height: 100, width: 100 },
});
export default App;