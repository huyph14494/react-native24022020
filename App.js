/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group_row}>
        <View style={styles.group_text_left()}>
          <Text style={styles.textColor}>6</Text>
        </View>
        <View style={styles.group_text_right()}>
          <Text style={styles.textColor}>7</Text>
        </View>
      </View>

      <View style={styles.group}>
        <View style={styles.group_row_center}>
          <View style={styles.group_text_center_left(0)}>
            <Text style={styles.textColor}>2</Text>
          </View>
          <View style={styles.group_text_center_right(0)}>
            <Text style={styles.textColor}>4</Text>
          </View>
        </View>

        <View style={styles.group_row_center}>
          <View style={styles.group_text_center()}>
            <Text style={styles.textColor}>1</Text>
          </View>
        </View>

        <View style={styles.group_row_center}>
          <View style={styles.group_text_center_left(0)}>
            <Text style={styles.textColor}>3</Text>
          </View>
          <View style={styles.group_text_center_right(0)}>
            <Text style={styles.textColor}>5</Text>
          </View>
        </View>
      </View>

      <View style={styles.group_row}>
        <View style={styles.group_text_left(true)}>
          <Text style={styles.textColor}>8</Text>
        </View>
        <View style={styles.group_text_right(true)}>
          <Text style={styles.textColor}>9</Text>
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
    flexDirection: 'column',
  },

  group: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  group_row_center: {
    height: 50,
    width: 265,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  group_row: {
    height: 50,
    flexDirection: 'row',
  },

  group_text_center_left(left = 0) {
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      height: 50,
      paddingLeft: 40,
      paddingRight: 40,
      left: left,
    };
  },

  group_text_center_right(right = 0) {
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      height: 50,
      paddingLeft: 40,
      paddingRight: 40,
      right: right,
    };
  },
  group_text_center() {
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      height: 50,
      paddingLeft: 40,
      paddingRight: 40,
    };
  },

  group_text_left(isBottom) {
    let obj = {};
    if (isBottom) {
      obj.bottom = 0;
    }
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      height: 50,
      paddingLeft: 40,
      paddingRight: 40,
      left: 0,
      ...obj,
    };
  },
  group_text_right(isBottom) {
    let obj = {};
    if (isBottom) {
      obj.bottom = 0;
    }
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      justifyContent: 'center',
      height: 50,
      paddingLeft: 40,
      paddingRight: 40,
      right: 0,
      ...obj,
    };
  },
});

export default App;
