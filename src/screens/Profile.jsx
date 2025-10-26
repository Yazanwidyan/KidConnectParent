import {StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header title="My Profile" />
      <View style={styles.body}>
        <Text style={styles.label}>Parent Name:</Text>
        <Text style={styles.value}>John Doe</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>john@example.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+1 234 567 890</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  body: {padding: 16},
  label: {fontWeight: '600', color: '#444', marginTop: 8},
  value: {fontSize: 16, color: '#333'},
});
