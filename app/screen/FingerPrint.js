import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../Component/Background';
import LinearGradient from 'react-native-linear-gradient';
const FingerprintScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Background />
            <View style={{ width: "100%", alignSelf: "center", height: "100%" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "100%", alignSelf: "center" }}>
                    <LottieView
                        style={{ height: "60%", width: "100%" }}
                        source={require('../Component/FingerPrint.json')}
                        autoPlay
                        loop
                    />

                </TouchableOpacity>
                <View style={{ width: "100%", height: "100%", alignItems: "center" }}>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate("SignUpndLogin")}
                    >
                        <LinearGradient
                            colors={['#1A5261', '#1C9D98']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}
                        >

                            <Text style={styles.buttonText}>
                                Next
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        // top: -2,
        // bottom: -2,,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        left: -2,
        right: -2,
        borderRadius: 1,
        borderWidth: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 50,
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '80%',
        height: "7%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginTop: '10%',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
        fontWeight: "700"
    },
    skip: {
        marginTop:13,
        color: '#fff',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
        fontWeight: "700"
    },
});

export default FingerprintScreen;