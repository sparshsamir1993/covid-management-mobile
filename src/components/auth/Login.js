import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { authActions } from "../../../actions";
import { globalStyles } from "../../../styles"

const { login } = authActions;
const Login = ({ setIsLogin }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginUser = () => {
        login(email, password);
    }
    return (
        <View>
            <TextInput onChangeText={setEmail} placeholder="Email" style={styles.input} autoCapitalize="none"></TextInput>
            <TextInput onChangeText={setPassword} secureTextEntry={true} placeholder="Password" style={styles.input} autoCapitalize="none"></TextInput>
            <TouchableOpacity onPress={loginUser} style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={{ margin: 'auto', padding: 10 }}> or </Text>
            <TouchableOpacity onPress={() => setIsLogin(false)} style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        width: "50%",
        backgroundColor: "#3333ff",
        color: 'white',
        alignItems: 'center',
    },

})

export default Login;