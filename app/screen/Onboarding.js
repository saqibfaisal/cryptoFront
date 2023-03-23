import React, { useState, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Background from '../Component/Background';
import rocket from "../assets/rocket.png"
import bg4 from "../assets/Screen3.png"
import Wellect from "../assets/Wellect.png"
import Graph from "../assets/Graph.png"
import FingerPrint from "../assets/FingerPrint.png"
import Dots from '../Component/Dot';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { getOnboarding, onboarding } from '../redux/reducer/auth'
const OnBoarding = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const dispatch = useDispatch()
    const data = [
        {
            img: Background,
            bot: Wellect,
        },
        {
            img: Background,
            bot: Graph,
            title: 'Fastest Drewering ',
            title2: 'Crypto App',
            text: 'Lorem is not a question or a complete sentence.',
            text2: 'Lorem is not a question or a.',
        },
        {
            img: Background,
            bot: FingerPrint,
            title: 'Fastest Drewering ',
            title2: 'Crypto App',
            text: 'Lorem is not a question or a complete sentence.',
            text2: 'Lorem is not a question or a.',
        },
        {
            img: Background,
            bot: rocket,
            title: 'Fastest Drewering ',
            title2: 'Crypto App',
            text: 'Lorem is not a question or a complete sentence.',
            text2: 'Lorem is not a question or a.',
        },
    ];

    const skipMoveToNext = async () => {
        try {
            await AsyncStorage.setItem("onboarding", JSON.stringify({ value: true }));
            // navigation.navigate('MyStack')
            activeIndex == data.length - 2 ? navigation.navigate("FingerPrint") : null;
            console.log("MyStack");

        } catch (error) {
            console.log('---->>>catch', error);
        }
    };

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <FlatList
                ref={flatListRef}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={data}
                horizontal={true}
                snapToInterval={Dimensions.get('window').width}
                decelerationRate={0.8}
                onScroll={(event) => {
                    setActiveIndex(Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('window').width));
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ width: Dimensions.get('window').width, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Background />
                            <Image source={item.bot} style={{ width: "65%", height: '35%' }} />
                            <View style={{ justifyContent: "center", alignItems: "center" }}>

                                <Text style={{ width: '100%', justifyContent: 'center', alignItems: 'center', color: '#fff', marginTop: '10%', fontSize: 25 }}>{item.title}</Text>
                                {item.title2 &&
                                    <Text style={{ width: '35%', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 25 }}>{item.title2}</Text>}
                            </View>
                            {item.text &&
                                <Text style={{
                                    width: '80%', justifyContent: 'center', alignItems
                                        : 'center', color: '#fff', marginTop: '5%', fontSize: 18
                                }}>{item.text}</Text>
                            }
                            {item.text2 && <Text style={{ width: '80%', justifyContent: 'center', alignItems: 'center', color: '#fff', marginTop: '2%', fontSize: 18 }}>{item.text2}</Text>}

                            <Dots activeIndex={index} dataLength={data.length} />
                            <TouchableOpacity style={styles.button} onPress={() => {

                                flatListRef.current.scrollToOffset({
                                    animated: true,
                                    offset: Dimensions.get('window').width * Number(index + 1),

                                });
                                index == data.length - 1 ? navigation.navigate("FingerPrint") : null;
                                skipMoveToNext();
                            }}>
                                <LinearGradient
                                    colors={['#1A5261', '#1C9D98']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.gradient}
                                >
                                    <Text style={styles.buttonText}>{index == data.length - 1 ? 'Get started' : 'Next'}</Text>

                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUpndLogin")}>
                                <Text style={styles.skip}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    );  
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
    gradient: {
        position: 'absolute',
        // top: -2,
        // bottom: -2,,
        height: "110%",
        alignItems: "center",
        justifyContent: "center",
        left: -2,
        right: -2,
        borderRadius: 1,
        borderWidth: 0,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
        fontWeight: "700"
    },
    skip: {
        marginTop: 13,
        color: '#fff',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
        fontWeight: "700"
    },
});

export default OnBoarding;