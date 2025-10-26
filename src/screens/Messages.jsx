import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import MessageBubble from '../components/MessageBubble';

export default function Messages() {
  const messages = [
    {id: 1, text: 'Ava had a great morning!', sender: 'Teacher'},
    {id: 2, text: 'That’s wonderful to hear!', sender: 'Parent'},
  ];

  return (
    <View style={styles.container}>
      <Header title="Messages" />
      <ScrollView style={styles.chat}>
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  chat: {padding: 16},
});
