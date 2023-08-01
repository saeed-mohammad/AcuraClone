import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'
import Main from '../components/main/Main'


const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
            <Header/>
            <Main/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        backgroundColor:'white',
        flex:1
    }
})