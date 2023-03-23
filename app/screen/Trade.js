import { View, TouchableOpacity, Text, StyleSheet, ScrollView, TextInput, FlatList, Slider } from 'react-native';
import React, { useState } from 'react'
import Background from '../Component/Background';
import DropDown2 from '../Component/DropDown2';
import DropDown from '../Component/DropDown';


const Trade = () => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const [lineHeight, setLineHeight] = useState(50);

    const handleSliderChange = (value) => {
        setLineHeight(value);
    };


    return (
        <View style={{ height: '100%' }} >
            <Background />
            <ScrollView>
                <View style={{ marginTop: '10%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'green',

                                width: '30%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',

                                borderTopStartRadius: 30,
                                borderBottomEndRadius: 60,
                                borderBottomLeftRadius: 30

                            }}
                        >
                            <Text style={{ color: 'white' }}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',

                                width: '30%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTopEndRadius: 30,
                                borderTopStartRadius: 60,
                                borderBottomRightRadius: 30

                            }}
                        >
                            <Text style={{ color: 'white' }}>Sell</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{
                            justifyContent: 'center',
                            width: '80%'
                        }}>
                            <DropDown />
                        </View>

                        <TextInput
                            style={styles.input}
                            // dropdownIconColor={'white'}
                            // pickerStyle={{color: 'white'}}
                            onChangeText={text => setInput1(text)}
                            value={input1}
                            placeholder="Price (USDT)"
                            placeholderTextColor="white"

                        />
                        <Text style={{ color: 'white', width: '80%' }}>Est value $28,184.60</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setInput2(text)}
                            value={input2}
                            placeholder="Amount"
                            placeholderTextColor="white"
                        />
                        {/* <HorizontalLine height={lineHeight} /> */}
                        <Text style={{ color: 'white' }}>{lineHeight}</Text>
                        <Slider
                            style={{ width: '80%', marginTop: 20 }}
                            minimumValue={50}
                            maximumValue={500}
                            step={50}
                            value={lineHeight}
                            onValueChange={handleSliderChange}
                        />



                        <TextInput
                            style={styles.input}
                            onChangeText={text => setInput1(text)}
                            value={input1}
                            placeholder="Total"
                            placeholderTextColor="white"
                        />
                        <View style={{ width: '80%', marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ color: 'white' }}>Avaliable 0 USDT</Text>
                            <Text style={{ color: 'white' }}>Max buy 0 BTC</Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'green',
                                width: '80%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                                marginTop: 10

                            }}
                        >
                            <Text style={{ color: 'white' }}>Buy BTC</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <DropDown2 />

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: 48,
        borderColor: 'gray',
        marginVertical: 8,
        paddingHorizontal: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#30373E',
        color: '#fff',
    },
    selectText: {
        color: '#fff',
        fontSize: 16,
    },
    input: {
        width: '80%',
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,

    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',

    },
    optionsList: {
        marginTop: 5,
        width: '80%',

    },
    option: {
        padding: 10,
        // borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',

    },
})

export default Trade