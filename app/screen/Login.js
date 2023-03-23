import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Image, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../Component/Background';
import { LoginUser } from '../redux/reducer/auth';
const Login = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const state = useSelector(state => state);
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    const handleSignin = () => {
        if (!password, !email) {
            ToastAndroid.show("Fill the Input", 2000);
        }
        else {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                // "email": "ifazul02@gmail.com",
                // "password": "password12345"
                "email": email,
                "password": password
            });
            dispatch(LoginUser(raw, navigation, setLoad))
            setEmail("")
            setPassword("")
        }
    };

    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.mainContainer}>
                <Text style={{ width: '95%', fontSize: 25, marginBottom: 20, color: '#fff' }}>Login</Text>
                <View style={styles.loginContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={styles.labels}>Email<Text style={{ color: "#FF0000" }}> *</Text></Text>
                        <Text style={{ color: '#fff' }}>Login with Mobile</Text>
                    </View>
                    <TextInput
                        style={[styles.input, { marginBottom: 20, }]}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                    />
                    <Text style={styles.label}>Password<Text style={{ color: "#FF0000" }}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                    />
                    <TouchableOpacity style={{ alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 16, color: "#FFF", fontWeight: "700" }}>Forget Passowrd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSignin}>
                        <LinearGradient
                            colors={['#1A5261', '#1C9D98']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>{load ? 'Loading...' : "Login"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: "#FFF" }}>you haven't account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#FFF" }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        padding: 20,
        borderColor: "grey",
        width: '100%',
        borderWidth: 2,
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 120,

    },
    iconText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 20
    },
    container: {
        height: '100%'

    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
        width: '100%'
    },
    labels: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        color: "#fff",
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        // marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#fff'
    },
    checkboxLabelColor: {
        fontSize: 14,
        color: '#4FFC34'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        height: "16%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: '10%',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
        fontWeight: "700"
    },
    gradient: {
        position: 'absolute',
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        left: -2,
        right: -2,
        borderRadius: 1,
        borderWidth: 0,
    },
});

export default Login;