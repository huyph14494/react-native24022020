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
      <View style={styles.group_1}>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>A</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>B</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>C</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>D</Text>
        </View>
      </View>
      <View style={styles.group_2}>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>A</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>B</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>C</Text>
        </View>
        <View style={styles.group_text}>
          <Text style={styles.textColor}>D</Text>
        </View>
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
    flex: 10,
    flexDirection: 'column',
  },
  group_1: {
    flex: 5,
    flexDirection: 'column',
  },
  group_2: {
    flex: 5,
    flexDirection: 'row',
  },
  get textColor() {
    return {color: getRandomColor()};
  },
  get group_text() {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: getRandomColor(),
    };
  },
});

export default App;
