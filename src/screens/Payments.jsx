import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import PaymentCard from '../components/PaymentCard';

export default function Payments() {
  const payments = [
    {id: 1, title: 'Tuition - October', amount: '$650', status: 'Paid'},
    {id: 2, title: 'Activity Fee', amount: '$50', status: 'Pending'},
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Payments" />
      <View style={styles.list}>
        {payments.map(p => (
          <PaymentCard key={p.id} payment={p} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  list: {padding: 16},
});
