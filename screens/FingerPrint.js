import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Finger from '../components/fingerMatch/Finger'
const FingerPrint = () => {
  return (
    <View style={styles.container}>
        <StatusBar  backgroundColor="red"/>
      <Finger/> 
      <Finger/>
      <View style={styles.scoreContainer}>
            <Text style={styles.score}>FINGER PRINT : </Text>
        </View>
    </View>
  )
}

export default FingerPrint

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'white'
    },
    scoreContainer:{
        marginTop:25
    },
    score:{
        backgroundColor:'grey',
        color:'white',
        textAlign:'center',
        padding:10,
        fontWeight:'600',
        fontSize:18,
        borderRadius:10,
        marginBottom:15
    },
})