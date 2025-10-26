import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {padding: 16, backgroundColor: '#25A0DD'},
  title: {color: '#FFF', fontSize: 18, fontWeight: '600'},
});
