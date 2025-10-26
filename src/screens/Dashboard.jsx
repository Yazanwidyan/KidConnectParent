import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import ChildCard from '../components/ChildCard';
import Header from '../components/Header';

export default function Dashboard() {
  const children = [
    {id: 1, name: 'Ava Johnson', age: '3 years', classroom: 'Sunflowers'},
    {id: 2, name: 'Liam Brown', age: '4 years', classroom: 'Rainbows'},
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Your Children" />
      <View style={styles.list}>
        {children.map(child => (
          <ChildCard key={child.id} child={child} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  list: {padding: 16},
});
