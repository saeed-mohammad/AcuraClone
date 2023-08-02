import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Camera = () => {
    const navigation=useNavigation()
  // button event...
  const handleBack=()=>{
    navigation.navigate('IdCards')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={styles.backtn}>
              <TouchableOpacity onPress={()=>handleBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.country}>
                <Text style={styles.name}>Country Name</Text>
                <AntDesign name="flag" size={18} color="white" />
            </View>
        </View>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'red',
        paddingTop:20,
        paddingBottom:10,
        paddingRight:10,
      },
      backtn:{
        paddingHorizontal:10
      },
      country:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        justifyContent:'space-between'
      },
      name:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
      },
})