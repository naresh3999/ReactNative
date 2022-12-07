import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Message({userId, id, title, body}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>
        {id}.{title}
      </Text>
      <Text style={styles.bodyStyle}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 5,
    margin: 5,
  },
  textStyle: {
    fontSize: 15,
    padding: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  bodyStyle: {
    fontSize: 15,
    padding: 15,
  },
});
