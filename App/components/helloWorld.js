import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   View,
   Platform
} from 'react-native'

const HelloWorld = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        "Hello World!"
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default HelloWorld


// if (Platform.OS === "ios") {
//   return (
//     <View style={styles.container}>
//     <Text style={styles.welcome}>
//     "Hello iOS World!"
//     </Text>
//     </View>
//   )
// } else if (Platform.OS === "android") {
//   return(
//     <View style={styles.container}>
//     <Text style={styles.welcome}>
//     "Hello Android World"
//     </Text>
//     </View>
//   )
// }
