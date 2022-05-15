import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const Transaction = () => {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.input}>17 April 2020</Text>
        <Text style={styles.text}>Water, Food</Text>
        <Text style={styles.cost}>-Rp. 300.000</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.input}>18 April 2020</Text>
        <Text style={styles.text}>Office supplies</Text>
        <Text style={styles.cost}>-Rp. 300.000</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.input}>18 April 2020</Text>
        <Text style={styles.text}>Office supplies</Text>
        <Text style={styles.cost1}>+Rp. 300.000</Text>
      </View>
    </>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 365,
    height: 70,
    top: 53,
    borderRadius: 10,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 5,
  },
  container2: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 365,
    height: 70,
    top: 132,
    borderRadius: 10,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 5,
  },
  container3: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 365,
    height: 70,
    top: 210,
    borderRadius: 10,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 6,
    left: 20,
    top: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
    left: 20,
    top: 11,
  },
  cost: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#D9435E',
    left: 265,
    bottom: 24,
  },
  cost1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1ABC9C',
    left: 265,
    bottom: 24,
  },
});
