import { View, Button, Text, TouchableOpacity,TouchableWithoutFeedback,TextInput,StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";


const DropDown = () => {
  const refRBSheet = useRef();
  const [selectedOption, setSelectedOption] = useState("Option Orders(0)");

  const handleOptionPress = (option) => {
    console.log(`Selected option: ${option}`);
    setSelectedOption(option);
    refRBSheet.current.close();
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  return (
  
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#fff",
        // width:'80%'
      }}
    >
     
      <TouchableOpacity
        style={{
            height: 50,
            marginVertical: 10,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            justifyContent:'center',
            // alignItems:'flex-start',
            // width:'100%'

          
          
          
        }}
        onPress={() => refRBSheet.current.open()}
      >
        
        <Text style={{color:'#fff'}}>{selectedOption}</Text>
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
     
    
  )
}
const styles = StyleSheet.create({})
export default DropDown