import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { authActions } from "../../../actions";
import { globalStyles } from "../../../styles";

const { register } = authActions;
const Register = ({ setIsLogin }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const registerUser = () => {
        if (password === confirmPassword) {
            register(email, password);
        }
    }

    return (
        <View>
            <TextInput onChangeText={setEmail} placeholder="Email" style={styles.input} autoCapitalize="none"></TextInput>
            <TextInput onChangeText={setPassword} secureTextEntry={true} placeholder="Password" style={styles.input} autoCapitalize="none"></TextInput>
            <TextInput onChangeText={setConfirmPassword} secureTextEntry={true} placeholder="Confirm Password" style={styles.input} autoCapitalize="none"></TextInput>
            <TouchableOpacity onPress={registerUser} style={globalStyles.primaryButton} >
                <Text style={globalStyles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={{ margin: 'auto', padding: 10 }}> or </Text>
            <TouchableOpacity onPress={() => setIsLogin(true)} style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>Login</Text>
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
        width: "50%"
    }
})

export default Register;