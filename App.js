import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Animated, Image } from 'react-native';
import Background from './src/files/scene.png';
import Sun from './src/files/sun.svg';
import Mountain from './src/files/mountain.svg';
import Svg, { Path, SvgXml } from 'react-native-svg';
import Switch from './switch';
import Moon from './src/files/moon.svg'
const App = () => {
  const sun = useRef(new Animated.ValueXY({ x: 600, y: -400 })).current;
  const moon = useRef(new Animated.ValueXY({ x: -600, y: 400 })).current;
  const sunOpacity = useRef(new Animated.Value(0)).current;
  const day = useRef(new Animated.Value(1)).current;
  const night = useRef(new Animated.Value(0)).current;
  const [isDay, setDay] = useState(true);
  useEffect(() => {
    if (isDay) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(sun, {
            toValue: { x: 100, y: 400 },
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(moon, {
            toValue: { x: -600, y: 400 },
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(sunOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(day, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(night, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          })
        ])
      ]).start();
      return;
    }
    Animated.sequence([
      Animated.parallel([
        Animated.timing(sun, {
          toValue: { x: 600, y: -400 },
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(moon, {
          toValue: { x: 100, y: 400 },
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(sunOpacity, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(day, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(night, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        })
      ])
    ]).start();
  }, [isDay]);
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Animated.View style={[{
        zIndex: 100,
        opacity: sunOpacity,
        transform: [
          { translateX: sun.x },
          { translateY: sun.y },
        ],
      }]} ><Sun style={{ zIndex: 101 }} /></Animated.View>
      <Animated.View style={[{
        zIndex: 100,
        // opacity: sunOpacity,
        transform: [
          { translateX: moon.x },
          { translateY: moon.y },
        ],
      }]} ><Moon style={{ zIndex: 101 }} /></Animated.View>
      <Switch isDay={isDay} setDay={setDay} />
      <Animated.Image source={require("./src/files/scene.png")} style={{ width: "100%", height: "100%", position: "absolute", zIndex: -1, opacity: day }} />
      <Animated.Image source={require("./src/files/night.png")} style={{ width: "100%", height: "100%", position: "absolute", zIndex: -1, opacity: night }} />
    </View >
  );
};

export default App;
// const styles = StyleSheet.create({});

// import React, { useEffect, useRef } from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// const App = () => {
//   const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(translation, {
//         toValue: { x: 290, y: 350 },
//         duration: 2000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(translation, {
//         toValue: { x: 0, y: 650 },
//         duration: 2000,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [translation]);
//   return (
//     <SafeAreaView>
//       <Animated.View
//         style={[
//           styles.animation,
//           {
//             transform: [
//               { translateX: translation.x },
//               { translateY: translation.y },
//             ],
//           },
//         ]}
//       />
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   animation: { backgroundColor: 'deeppink', height: 100, width: 100 },
// });
// export default App;