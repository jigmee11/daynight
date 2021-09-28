import React, { useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Pressable, Animated } from "react-native";
import LittleSun from './src/files/littleSun.svg'

const Switch = ({ isDay, setDay }) => {
    const littleSun = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if (!isDay) {
            Animated.timing(littleSun, {
                toValue: 20,
                duration: 3000,
                useNativeDriver: true,
            }).start();
            return;
        }
        Animated.timing(littleSun, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, [isDay]);
    return (
        <Pressable onPress={() => setDay(!isDay)}>
            <View style={styles.container}>
                <Animated.View style={[{ transform: [{ translateX: littleSun }] }]}>
                    <LittleSun />
                </Animated.View>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        borderRadius: 45,
        backgroundColor: "#27173A",
        width: 40,
        height: 22,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
    }
});
export default Switch;