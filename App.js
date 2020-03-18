/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group_top}>
        <Text style={styles.textColor}>Top Content Here</Text>
      </View>

      <View style={styles.group}>
        <View style={styles.group_text_1}>
          <Text style={styles.textColor}>First</Text>
        </View>
        <View style={styles.group_text_2}>
          <Text style={styles.textColor}>Second</Text>
        </View>
        <View style={styles.group_text_3}>
          <Text style={styles.textColor}>Three</Text>
        </View>
      </View>

      <View style={styles.group_bottom}>
        <Text style={styles.textColor}>Bottom Content Here</Text>
      </View>
    </View>
  );
};

const getRandomColor = function() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  let i = 0;
  for (; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  get textColor() {
    return {
      color: getRandomColor(),
      fontSize: 20,
      padding: 5,
      fontWeight: '700',
    };
  },
  group_top: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    backgroundColor: getRandomColor(),
  },
  group_bottom: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    backgroundColor: getRandomColor(),
  },
  group_text_1: {
    position: 'absolute',
    backgroundColor: getRandomColor(),
    left: 75,
  },
  group_text_2: {
    backgroundColor: getRandomColor(),
  },
  group_text_3: {
    position: 'absolute',
    backgroundColor: getRandomColor(),
    right: 70,
  },
});

export default App;
