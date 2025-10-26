import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';

export default function Notifications() {
  const notifications = [
    {id: 1, text: 'New photo added for Ava!'},
    {id: 2, text: 'Invoice for November available.'},
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Notifications" />
      <View style={styles.list}>
        {notifications.map(n => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  list: {padding: 16},
});
