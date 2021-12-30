import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sparsh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 30
    },
    container: {
        marginLeft: 5
    }
})

export default HomeScreen;