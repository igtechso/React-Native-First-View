/**
 * Sample React Native FirstViewApp
 * https://www.igtechso.com/
 *
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with IGT</Text>
      <Button title='Contact Developer' onPress={()=>{Linking.openURL('https://www.igtechso.com/')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle:'italic',
    margin: 10,
  },
});

export default App;