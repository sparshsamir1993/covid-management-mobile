import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../../styles";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";


const HomeScreen = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);


    return (
        <View style={globalStyles.container}>

            {isLogin && <Login setIsLogin={setIsLogin} />}
            {!isLogin && <Register setIsLogin={setIsLogin} />}

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 30
    },
})

export default HomeScreen;