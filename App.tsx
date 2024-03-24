import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import funcionBoton from './index.js'

const App = () => {
  return (
    <View style={styles.container}> 
      <TouchableOpacity onPress={funcionBoton}>
        <Text style={styles.button}>Pulsame</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    maxWidth:100,
    paddingHorizontal:10,
    borderColor:"lightblue",
    borderStyle: 'solid',
    borderRadius: 5,
    fontSize: 20,
  },
  container: {
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
