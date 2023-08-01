import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CountryList from '../components/country/CountryList'

const Country = () => {
  return (
    <View style={{flex:1}}>
      <CountryList/>
    </View>
  )
}

export default Country

const styles = StyleSheet.create({})