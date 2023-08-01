import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Face from '../components/faceMatch/Face'
/**
 * ! the icon only use Ionicons material
 */
const FaceMatch = () => {
  return (
    <View style={styles.container}>
        <StatusBar  backgroundColor="red"/>
        <Face/>
        <Face/>
        <View style={styles.scoreContainer}>
            <Text style={styles.score}>Match Score : 0 %</Text>
            <Text style={styles.info}>Available in Mobile and Web SDK/API</Text>
            <Text style={styles.info}>Try itt now</Text>
        </View>
    </View>
  )
}

export default FaceMatch

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'white'
    },
  scoreContainer:{
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
info:{
    color:'black',
    textAlign:'center',
}
})