import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MessageBubble({message, isSender}) {
  return (
    <View
      style={[
        styles.container,
        isSender ? styles.senderContainer : styles.receiverContainer,
      ]}>
      <View
        style={[
          styles.bubble,
          isSender ? styles.senderBubble : styles.receiverBubble,
        ]}>
        <Text
          style={[
            styles.messageText,
            isSender ? styles.senderText : styles.receiverText,
          ]}>
          {message.text}
        </Text>
        <Text style={styles.time}>{message.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  senderContainer: {
    justifyContent: 'flex-end',
  },
  receiverContainer: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 1,
  },
  senderBubble: {
    backgroundColor: '#25A0DD',
    borderBottomRightRadius: 4,
    alignSelf: 'flex-end',
  },
  receiverBubble: {
    backgroundColor: '#E5E7EB',
    borderBottomLeftRadius: 4,
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 15,
  },
  senderText: {
    color: '#fff',
  },
  receiverText: {
    color: '#111827',
  },
  time: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
    textAlign: 'right',
  },
});
