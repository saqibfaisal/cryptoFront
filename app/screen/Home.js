import { Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native"
import React from "react"
import Logo from "../assets/seficoin-app-icon.png"
import { useEffect, useRef, useState } from 'react';
import Background from "../Component/Background";
import Client from "socket.io-client"
import Menu from "../assets/Menu.png";
import Search from "../assets/Search.png";
import Notification from "../assets/Notification.png";
import HomeIcon1 from "../assets/HomeIcon1.svg"
import HomeIcon2 from "../assets/HomeIcon2.svg"
import HomeIcon3 from "../assets/HomeIcon3.svg"
import HomeIcon4 from "../assets/HomeIcon4.svg"
import HomeIcon5 from "../assets/HomeIcon5.svg"
import HomeIcon6 from "../assets/HomeIcon6.svg"
import { SafeAreaView } from "react-native";
const windowWidth = Dimensions.get("window").width;
const cardWidth = windowWidth * 0.28;
function Home({ navigation }) {
    const [Coinlogo, setLogo] = useState()
    const [CoinNames, setCoinNames] = useState()
    const [CoinData, setCoinData] = useState()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://192.168.100.145:3000/tickers", requestOptions)
        .then(response => response.text())
        .then(result => {
            let jsons = JSON.parse(result)
            let coinName = jsons.instId
            console.log(coinName);
            setCoinNames(coinName)
            coinName.map((coin) => {
                setCoinNames(coin)
            })
        }
        )
        .catch(error => console.log('error', error));
    useEffect(() => {
        const coin = () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://192.168.100.145:3000/api/v1/funding/currencies", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let json = JSON.parse(result)
                    let logos = json.data.data
                    // console.log(logos, "logos")
                    // let Coinlogo = logos
                    // console.log(logos);
                    // setLogo()
                })
                .catch(error => console.log('error', error));
        }
        // console.log(Coinlogo);
        coin()
    }, [])
    let sockets = (coin) => {
        // console.log(CoinNames);
        const io = Client("http://192.168.100.145:3000")
        io.on("connect", () => {
            console.log("Connected to client");
            // io.emit(`${coin}`, `${coin}`)
            io.on("Market", (datas) => {
                let dta = JSON.parse(datas)
                let saraData = dta.data
                console.log(saraData);
                // setCoinData(saraData)

            })
        })
    }
    sockets()

    const renderCoinItem = ({ item, index }) => (
        <View key={index} style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "#1EE8B7", borderWidth: 1.5, borderRadius: 20, }}>
            <View style={{ display: 'flex', flexDirection: 'row', width: '40%' }}>
                <Image source={{ uri: item.logoLink }} style={{ width: 30, height: 30, marginRight: 10 }} />
                <View>
                    <Text style={{ marginLeft: 5, fontSize: 14, color: '#fff', fontWeight: "bold" }}>{item.instId}</Text>
                    <Text style={{ marginLeft: 5, color: '#B2BDCB', fontSize: 10, fontWeight: "bold" }}>{item.chain}</Text>
                </View>
                {/* <View>
                    <Text style={{ marginLeft: 5, fontSize: 14, color: '#fff', fontWeight: "bold" }}>hjello</Text>
                    <Text style={{ marginLeft: 5, color: '#B2BDCB', fontSize: 10, fontWeight: "bold" }}>world</Text>
                </View> */}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.price}>$38,350</Text>
                <View style={{ backgroundColor: "#10A20F", paddingTop: 5, paddingBottom: 5, alignItems: "center", justifyContent: "center", paddingLeft: 15, paddingRight: 15, borderRadius: 12, }}>
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16, }}>+3.97%</Text>
                </View>
            </View>
            {/* <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 15, color: '#8BD197' }}>
                    {item.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: item.price_change_percentage_24h > 0 ? '#8BD197' : '#FF3D71', marginLeft: 5 }}>
                        {item.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                    {item.price_change_percentage_24h > 0 ? (
                        <AntDesign name="caretup" size={20} color="#8BD197" />
                    ) : (
                        <AntDesign name="caretdown" size={20} color="#FF3D71" />
                    )}
                </View>
            </View> */}
        </View>
    );
    return (
        <SafeAreaView>
            {/* <ScrollView nestedScrollEnabled> */}
            <View style={{ position: "relative", height: "100%", width: "100%" }}>
                <Background resizeMode="cover" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }} />
                <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
                    <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "#1EE8B7", borderWidth: 1.5, padding: 16, borderRadius: 20, }}>
                            <Image source={Menu} style={{ width: 33, height: 33 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "#1EE8B7", borderWidth: 1.5, width: "77%", borderRadius: 20, }}>
                            <Image source={Search} style={{ width: 33, height: 33 }} />
                            <Text style={styles.search}>Search...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.glassMor}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '100%' }}>
                            <View>
                                <Text style={styles.text}>My Balance</Text>
                                <Text style={styles.text2}>54,941.83</Text>
                            </View>
                            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "#1EE8B7", borderWidth: 1.5, padding: 10, borderRadius: 20, }}>
                                <Image source={Notification} style={{ width: 30, height: 30 }} />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, marginTop: 10, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon1 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon2 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon3 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Convert</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, marginTop: 10, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon4 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon5 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Cards}>
                            <HomeIcon6 width={120} height={40} />
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Bot</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 20, fontWeight: "700", color: "#FFF" }}>Market</Text>
                            <Text style={{ fontSize: 14, fontWeight: "700", color: "#00E6FF" }}>See All</Text>
                        </View>
                        {/* <View style={{ marginTop: 10, marginBottom: 10, }}>
                        <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={CoinNames} renderItem={(item) => {
                            return (
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <TouchableOpacity style={{ marginLeft: 15 }}>
                                        <Text style={styles.CoinStyle}>CoinNames</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                    </View> */}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                            <FlatList nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                // data={Coinlogo}
                                data={CoinData}
                                renderItem={renderCoinItem}
                                keyExtractor={(item) => item.id}

                            />

                        </View>
                    </View>
                </View>
            </View >
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menuView: {
        borderColor: "purple",
        borderWidth: 1, justifyContent: "center",
        alignItems: "center",
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },

    Cards: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "#1EE8B7",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: cardWidth,
        borderRadius: 20,
    },
    glassContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,


    },
    glassMor: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "#1EE8B7",
        borderWidth: 2,
        padding: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    text: {
        color: '#00E6FF',
        fontSize: 14,
        fontWeight: "bold",
        // marginBottom: 10,
        fontFamily: "Quicksand-Bold",
    },
    text1: {
        color: 'white',
        fontSize: 16,

        // marginBottom: 10,
    },
    text2: {
        color: 'white',
        fontSize: 28,
        // marginBottom: 5,
        fontWeight: "bold",
        fontFamily: "Quicksand-Bold",
    },
    graphLine: {
        borderBottomWidth: 2,
        borderColor: 'blue',
        transform: [{ rotate: '45deg' }],
        width: 20,
        height: 20,
        marginLeft: 10,

    },
    image: {
        width: 35,
        height: 35
    },
    CoinStyle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff"
    },
    search: {
        fontFamily: "Quicksand-Bold",
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginLeft: 10,
    },
    price: {
        fontFamily: "Quicksand-Bold",
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginRight: 10,
    }
})
export default Home