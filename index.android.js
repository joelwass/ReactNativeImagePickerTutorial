/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NativeModules,
} from 'react-native';

class nativeImagePickerModule extends Component {

  _bringUpImagePicker() {
    console.log("Image Picker has been tapped");
    NativeModules.ImagePicker.openSelectDialog(
      {}, // no config yet 
      (uri) => { console.log(uri) }, 
      (error) => { console.log(error) }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
        underlayColor={'grey'} 
        onPress={this._bringUpImagePicker} 
        style={styles.imagePickerButton}>
          <Text>
            Bring Up Image Picker
          </Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagePickerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    paddingVertical: 5,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativeImagePickerModule', () => nativeImagePickerModule);
