import React from 'react';
import { View, StyleSheet } from 'react-native';

const Dots = ({ activeIndex, dataLength }) => {
    return (
      <View style={styles.dots}>
        {Array.from({ length: dataLength }, (_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot, // add active class if current index matches active index
            ]}
          />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    dots: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%',
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      backgroundColor: '#fff',
    },
    activeDot: {
      backgroundColor: '#3B3E5B', // set active dot color
    },
  });
  

export default Dots;