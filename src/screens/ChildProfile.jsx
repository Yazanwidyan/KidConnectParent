import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';

export default function ChildProfile() {
  const [moments] = useState([
    {id: 1, type: 'Meal', note: 'Had breakfast', time: '8:30 AM'},
    {id: 2, type: 'Nap', note: 'Slept well', time: '10:00 AM'},
    {id: 3, type: 'Activity', note: 'Painting class', time: '11:00 AM'},
  ]);

  return (
    <ScrollView style={styles.container}>
      <Header title="Ava’s Daily Feed" />
      <View style={styles.moments}>
        {moments.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.note}>{item.note}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  moments: {padding: 16},
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  type: {fontSize: 16, fontWeight: 'bold', color: '#333'},
  note: {marginTop: 4, color: '#555'},
  time: {marginTop: 6, fontSize: 12, color: '#888'},
});
