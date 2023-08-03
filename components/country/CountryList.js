import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import {countryName} from './countryName'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash.filter';

// component for flatlist
const Item=({item})=>{
  return(
  <View style={styles.countryList}>
    <Text style={styles.name}>{item.name}</Text>
  </View>
)
}
const CountryList = () => {
  const navigation=useNavigation();
  const [searchInp,setSearchInp]=useState('');
  const [Data,setData]=useState(countryName)

  // button event
const handleCountry=(item)=>{
  console.log(item)
  navigation.navigate('IdCards', {
    name: item.name,
  })
  // console.log('list select0',item.name)
}
const handleBtn=(e)=>{
  if(e=='back'){
    navigation.navigate('Home')
  }else{
    setSearchInp('')
  }
}
const handleSearch=(query)=>{
  setSearchInp(query)
  // filter...
  if(searchInp){
    const formattedQuery=query.toLowerCase();
    const filterData=filter(countryName,(country)=>{
      if(country.name.toLowerCase().includes(formattedQuery)){
        return true
      }
      return false
    })
    setData(filterData)
  }
}
// console.log(searchInp)
  return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
              <View style={styles.backtn}>
                <TouchableOpacity 
                onPress={()=>handleBtn('back')}
                >
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.search}>
                <Feather style={styles.icn_search} name="search" size={22} color="black" />
                <TextInput 
                style={styles.searchInput} 
                onChangeText={(query)=>handleSearch(query)}
                value={searchInp} 
                placeholder='Search Here'
                // clearButtonMode='always' not working
                />

                {
                (searchInp) &&
                  (<TouchableOpacity onPress={()=>handleBtn('close')}>
                  <AntDesign style={styles.icn_close} name="closecircle" size={18} color="black" />
                  </TouchableOpacity>
                  )
                }
              </View>
        </View>
        <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item=>item.name}
        renderItem={({item})=> 
        <TouchableOpacity onPress={()=>handleCountry(item)}>
        <Item item={item} /> 
        </TouchableOpacity>
        }
        />

    </View>
  )
}

export default CountryList

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer:{
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
    search:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'white',
      flex:1,
    },
    icn_search:{
        paddingHorizontal:10
    },
    searchInput:{
      fontSize:18,
      width:'80%'
    },
    icn_close:{
      alignContent:'flex-end'
    },
    countryList:{
      backgroundColor:'white',
      margin:10,
      borderRadius:10,
      backgroundColor:'red'
    },
    name:{
      padding:10,
      color:'white',
      fontSize:18
    },
})