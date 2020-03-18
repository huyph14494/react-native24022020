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
      <View style={styles.group}>
        <View style={styles.group_sub}>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Red</Text>
          </View>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Green</Text>
          </View>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Yellow</Text>
          </View>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Pink</Text>
          </View>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Oragan</Text>
          </View>
          <View style={styles.group_text()}>
            <Text style={styles.textColor}>Gray</Text>
          </View>
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
    flex: 1,
    flexDirection: 'row',
  },
  group: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  group_sub: {
    alignItems: 'flex-start',
  },
  get textColor() {
    return {
      color: getRandomColor(),
      fontSize: 20,
      padding: 5,
      fontWeight: '700',
    };
  },
  group_text() {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getRandomColor(),
    };
  },
});

export default App;
