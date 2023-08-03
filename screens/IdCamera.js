import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Camera from '../components/IdCamera/Camera'
const IdCamera = () => {
  return (
    <View style={{flex:1}}>
      <Camera/>
    </View>
  )
}

export default IdCamera

const styles = StyleSheet.create({
})