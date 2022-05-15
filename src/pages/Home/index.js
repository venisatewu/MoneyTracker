import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {pic} from '../../assets';
import {Button, Gap} from '../../components';
import Tabs from '../../components/atoms/Tabs';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.page}>
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.title}>Money Tracker</Text>
          <Text style={styles.subTitle}>Track your money</Text>
          <Image style={styles.picture} source={pic} />
        </View>
        {/* <Image source={{uri: profile.photo}} style={styles.image} /> */}
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
        <View style={styles.line} />
        <Text style={styles.cardTitle}>Your Balance</Text>
        <Text style={styles.number}>Rp. 10.000.000</Text>
        {/* <Number number={balance.totalBalance} style={styles.balance} /> */}
        <Text style={styles.cashOnHand}>
          Cash On Hand{' '}
          {/* <Number number={balance.cashOnHand} style={styles.amount} /> */}
        </Text>
        <Text style={styles.cashOnBank}>
          Cash On Bank{' '}
          {/* <Number number={balance.cashOnBank} style={styles.amount} /> */}
        </Text>
        <Text style={styles.cashHand}>Rp. 4.000.000</Text>
        <Text style={styles.cashBank}>Rp. 6.000.000</Text>
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.cardTitle}>Add Transaction</Text>
        <Button
          title="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={16} />
        <Button
          title="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
      <View style={styles.tab}>
        <Tabs />
      </View>
      <Gap height={24} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileWrapper: {
    paddingLeft: 24,
    paddingVertical: 38,
    paddingBottom: -50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 22,
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  picture: {
    left: 295,
    top: -60,
  },
  balanceWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    height: 208,
    paddingTop: 13,
  },
  cardTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 16,
  },
  cashOnHand: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 14,
    top: 40,
  },
  cashOnBank: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 14,
    top: 50,
  },
  line: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 360,
    height: 1.7,
    bottom: 110,
    borderRadius: 250,
    left: 25,
  },
  number: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 24,
    right: -90,
    top: 5,
  },
  cashHand: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 14,
    left: 130,
    top: -7.2,
  },
  cashBank: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 14,
    left: 130,
    top: 3.5,
  },
  tab: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 415,
    height: 70,
    bottom: 0,
    borderRadius: 0,
  },
});
