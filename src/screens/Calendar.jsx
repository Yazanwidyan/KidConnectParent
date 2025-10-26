import {ScrollView, StyleSheet, View} from 'react-native';

import CalendarEventCard from '../components/CalendarEventCard';
import Header from '../components/Header';

export default function Calendar() {
  const events = [
    {id: 1, title: 'Parent-Teacher Meeting', date: 'Oct 28', time: '2:00 PM'},
    {id: 2, title: 'Halloween Party', date: 'Oct 31', time: '10:00 AM'},
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Calendar" />
      <View style={styles.list}>
        {events.map(e => (
          <CalendarEventCard key={e.id} event={e} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  list: {padding: 16},
});
