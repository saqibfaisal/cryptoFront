import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Image, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import Background from '../Component/Background';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/reducer/auth'
import LinearGradient from 'react-native-linear-gradient';
const Register = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const state = useSelector(state => state);
    const [load, setLoad] = useState(false)
    // console.log('THIS IS REDUX STATE SO ,', state);s
    const dispatch = useDispatch()
    const handleSignup = () => {
        if (!firstName, !lastName, !password, !email) {
            // showMessage({
            //     message: 'Fill the Input',
            //     type: 'info',
            //   });
            ToastAndroid.show("Fill the Input", 2000);
        }
        else {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            });


            // navigation.navigate("Otp")
            dispatch(registerUser(raw, navigation, setLoad))
            setFirstName("")
            setLastName("")
            setPassword("")
            setEmail("")
        }
    }
    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.mainContainer}>

                <Text style={{ width: '95%', fontSize: 25, marginBottom: 20, color: '#fff' }}>Register</Text>
                <View style={styles.loginContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={styles.labels}>First name <Text style={{ color: "#FF0000" }}>*</Text></Text>
                        <Text style={{ color: '#fff' }}>Register with Mobile</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        placeholder="First name"
                        placeholderTextColor="#fff"
                    />
                    <Text style={styles.label}>Last name<Text style={{ color: "#FF0000" }}> *</Text></Text>
                    <TextInput
                        style={styles.input}

                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        placeholder="Last name"
                        placeholderTextColor="#fff"
                    />
                    <Text style={styles.label}>Email<Text style={{ color: "#FF0000" }}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        // secureTextEntry={true}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                    />
                    <Text style={styles.label}>Password<Text style={{ color: "#FF0000" }}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        secureTextEntry={true}
                        // keyboardType={"visible-password"}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSignup}>
                        <LinearGradient
                            colors={['#1A5261', '#1C9D98']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}
                        >

                            <Text style={styles.buttonText}>{load ? 'Loading...' : "Register"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: "#FFF" }}>Already a memeber?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#FFF" }}>Login</Text>
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
        marginTop: 50,


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
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
        color: "#fff"
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
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
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

export default Register;