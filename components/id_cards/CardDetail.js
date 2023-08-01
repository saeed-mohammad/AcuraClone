import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { idCard } from './idCard';

// component for flatlist
const Item=({item})=>{
    return(
        <View style={styles.cards}>
            <Text style={styles.cardName}>{item.name}</Text>
        </View>
    )
}
const CardDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={styles.backtn}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </View>
            <View style={styles.country}>
                <Text style={styles.name}>Country Name</Text>
                <AntDesign name="flag" size={18} color="white" />
            </View>
        </View>
        <FlatList
        data={idCard}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>
            <Item item={item}/>
        }
        />
    </View>
  )
}

export default CardDetail

const styles = StyleSheet.create({
    // card comp
    cards:{
        backgroundColor:'grey',
        margin:10,
        borderRadius:10
    },
    cardName:{
        padding:10,
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    // 
    container:{},
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