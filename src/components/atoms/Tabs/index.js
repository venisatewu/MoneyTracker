import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
//import {styles} from './styles';
import {Rectangle, Frame} from '../../../assets';

const Tabs = ({title, color = '#02CF8E', onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container1}>
          <Image style={styles.image} source={Rectangle} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container2}>
          <Image style={styles.image} source={Frame} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container1: {
    top: 20,
    left: 82,
  },
  container2: {
    top: -15,
    left: 257,
  },
  image: {
    width: 35,
    height: 35,
    bottom: 0,
  },
});
