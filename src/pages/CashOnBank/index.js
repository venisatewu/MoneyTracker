import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput, Gap} from '../../components';
import Transaction from '../../components/atoms/Transaction';

const CashOnBank = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Cash On Bank" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput title="Description" placeholder="Add the description" />
        <Gap height={16} />
        <TextInput title="Type" placeholder="Debit / Credit" />
        <Gap height={24} />
        <Button title="Save" />
        <Gap height={12} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.cardTitle}>Last 3 Transactions</Text>
        <Transaction />
        <Transaction />
      </View>
    </View>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 16,
  },
});
