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
      <View style={styles.group(1, 'column')}>
        <View style={styles.group_text(1)}>
          <Text style={styles.textColor}>1</Text>
        </View>
        <View style={styles.group_text(1)}>
          <Text style={styles.textColor}>2</Text>
        </View>
      </View>

      <View style={styles.group(6, 'column')}>
        <View style={styles.group(1, 'column')}>
          <View style={styles.group_text(1)}>
            <Text style={styles.textColor}>3</Text>
          </View>
          <View style={styles.group_text(1)}>
            <Text style={styles.textColor}>4</Text>
          </View>
        </View>

        <View style={styles.group(1, 'row')}>
          <View style={styles.group(2, 'column')}>
            <View style={styles.group_text(1)}>
              <Text style={styles.textColor}>5</Text>
            </View>
            <View style={styles.group_text(1)}>
              <Text style={styles.textColor}>6</Text>
            </View>
          </View>

          <View style={styles.group(1, 'column')}>
            <View style={styles.group_text(1)}>
              <Text style={styles.textColor}>7</Text>
            </View>
            <View style={styles.group_text(1)}>
              <Text style={styles.textColor}>8</Text>
            </View>
            <View style={styles.group_text(1)}>
              <Text style={styles.textColor}>9</Text>
            </View>
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
  group(flexValue, flexDirection) {
    let obj = {flex: flexValue};
    if (flexDirection) {
      obj.flexDirection = flexDirection;
    }
    return obj;
  },
  get textColor() {
    return {color: getRandomColor()};
  },
  group_text(flexValue = 1) {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      flex: flexValue,
      backgroundColor: getRandomColor(),
    };
  },
});

export default App;
