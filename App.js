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
      <View style={styles.group}>
        <View
          style={styles.group_text_top(
            (Dimensions.get('window').height - 75) / 2 - 50 * 3,
          )}>
          <Text style={styles.textColor}>1</Text>
        </View>
        <View
          style={styles.group_text_bottom(
            (Dimensions.get('window').height - 25) / 2 - 50 * 3 - 25,
          )}>
          <Text style={styles.textColor}>7</Text>
        </View>
      </View>

      <View style={styles.group}>
        <View
          style={styles.group_text_top(
            (Dimensions.get('window').height - 75) / 2 - 50 * 2,
          )}>
          <Text style={styles.textColor}>2</Text>
        </View>
        <View
          style={styles.group_text_bottom(
            (Dimensions.get('window').height - 25) / 2 - 50 * 2 - 25,
          )}>
          <Text style={styles.textColor}>6</Text>
        </View>
      </View>

      <View style={styles.group}>
        <View
          style={styles.group_text_top(
            (Dimensions.get('window').height - 75) / 2 - 50 * 1,
          )}>
          <Text style={styles.textColor}>3</Text>
        </View>
        <View
          style={styles.group_text_bottom(
            (Dimensions.get('window').height - 25) / 2 - 50 * 1 - 25,
          )}>
          <Text style={styles.textColor}>5</Text>
        </View>
      </View>

      <View style={styles.group}>
        <View
          style={styles.group_text_top(
            (Dimensions.get('window').height - 75) / 2,
          )}>
          <Text style={styles.textColor}>4</Text>
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
    flexDirection: 'column',
  },
  group_text_top(top = 0) {
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '100%',
      paddingLeft: 40,
      paddingRight: 40,
      top: top,
    };
  },
  group_text_bottom(bottom = 0) {
    return {
      position: 'absolute',
      backgroundColor: getRandomColor(),
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '100%',
      paddingLeft: 40,
      paddingRight: 40,
      bottom: bottom,
    };
  },
});

export default App;
