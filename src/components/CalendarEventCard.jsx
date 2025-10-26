import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CalendarEventCard({event}) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Ionicons name="calendar" size={28} color="#25A0DD" />
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.detail}>
          {event.date} • {event.time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  left: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F6FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  right: {flex: 1},
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
