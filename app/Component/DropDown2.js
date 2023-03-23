import { View, Button, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
// import SvgUri from '../img/vuesax-bold-import.svg';


const DropDown2 = () => {
  const refRBSheet = useRef();
  const [selectedOption, setSelectedOption] = useState("Option Orders(0)");

  const handleOptionPress = (option) => {
    console.log(`Selected option: ${option}`);
    setSelectedOption(option);
    refRBSheet.current.close();
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <View style={{ marginTop: '10%', marginBottom: '30%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "#fff",
          }}
        >

          <TouchableOpacity
            style={{
              // backgroundColor: "#fff",
              paddingVertical: 6,
              paddingHorizontal: 12,
              // borderRadius: 4,



            }}
            onPress={() => refRBSheet.current.open()}
          >
            <Text style={{ color: '#fff' }}>{selectedOption}</Text>
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <View style={{ padding: 16 }}>
              {options.map((option) => (
                <TouchableOpacity key={option} onPress={() => handleOptionPress(option)}>
                  <Text style={{ fontSize: 18, marginBottom: 8 }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </RBSheet>
        </View>
        <Text style={{ color: '#fff' }}>Assets</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%'
        }}>
          <Text style={{ marginLeft: 10, color: '#fff' }}>Bots(0)</Text>

          <Text style={{ color: '#fff' }}>testing</Text>
          {/* <SvgUri
  width="50"
  height="50"
  uri={require('../img/vuesax-bold-import.svg')}
/> */}
          {/* <SvgUri /> */}
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>No assets in your trading account</Text>
        <Text style={{ color: '#fff' }}>Deposit or trasfer crypto,or try demo trading</Text>
      </View>
    </View>
  )
}
export default DropDown2