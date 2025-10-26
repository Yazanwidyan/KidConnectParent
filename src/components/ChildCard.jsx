import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ChildCard({child}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Feed', {child})}>
      <Text style={styles.name}>{child.name}</Text>
      <Text style={styles.detail}>
        {child.classroom} • {child.age}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 2,
  },
  name: {fontSize: 18, fontWeight: 'bold', color: '#333'},
  detail: {color: '#777', marginTop: 4},
});
