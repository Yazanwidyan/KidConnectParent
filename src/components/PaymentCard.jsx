import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PaymentCard({payment, onPress}) {
  const getStatusColor = status => {
    switch (status.toLowerCase()) {
      case 'paid':
        return '#16A34A';
      case 'pending':
        return '#F59E0B';
      case 'overdue':
        return '#DC2626';
      default:
        return '#6B7280';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <Ionicons name="card-outline" size={26} color="#25A0DD" />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{payment.title}</Text>
          <Text style={styles.subtitle}>Due: {payment.dueDate}</Text>
        </View>
        <View style={styles.amountWrapper}>
          <Text style={styles.amount}>${payment.amount}</Text>
          <Text
            style={[styles.status, {color: getStatusColor(payment.status)}]}>
            {payment.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F6FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  amountWrapper: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  status: {
    fontSize: 13,
    marginTop: 4,
    textTransform: 'capitalize',
  },
});
