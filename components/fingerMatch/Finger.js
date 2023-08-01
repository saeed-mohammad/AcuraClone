import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FaceMatch = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
            <Feather name="upload" size={24} color="black" />
            <Text style={styles.imgText}>Upload Finger Image</Text>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Ionicons name='images' size={24} color="white" />
                <Text style={styles.btn_name}>Select</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default FaceMatch

const styles = StyleSheet.create({
    imgContainer:{
        borderWidth:1,
        borderColor:'grey',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:15,
        minHeight:200,
        borderRadius:10
    },
    imgText:{
        color:'black',
        fontSize:20,
        fontWeight:'600'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:15
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'red',
        gap:8,
        paddingVertical:8,
        paddingHorizontal:20,
        justifyContent:'center',
        borderRadius:10,
        minWidth:200
    },
    btn_name:{
        color:'white',
        fontSize:16
    }
})