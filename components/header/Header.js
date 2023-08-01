import { StyleSheet, Text, View,Image, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
const Header = () => {
  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity
            onPress={()=>Linking.openURL('https://accurascan.com/')}
            >
                <Image style={styles.icon} source={require('../../assets/icons/icn_website.png')}/>
            </TouchableOpacity>
        </View>
        <View>
            <Image style={styles.headicon} source={require('../../assets/icons/reg_logo.png')}/>
        </View>
        <View>
            <TouchableOpacity
            onPress={()=>Linking.openURL('mailto:connect@accurascan.com')}>
                <Image style={styles.icon} source={require('../../assets/icons/email.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginVertical:10
    },
    icon:{
        width:50,
        height:50
    }
})