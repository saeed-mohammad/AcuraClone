import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { data } from './data'
import { useNavigation } from '@react-navigation/native';
    /**
    * ! work on description2 in id 4
    * ! icon and icon name not aligning
    * 
    */
   
   
   const Item=({item})=>{
    return(
            <View style={[styles.content,{backgroundColor:item.backgroundColor}]}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.title}>{item.description}</Text>
            <View style={styles.iconContainer}>
            {
                item.icons.map((v, i) => (
                <Image style={styles.icon} resizeMode='contain' source={v.name}/>
                ))
            }
            </View>
            <View style={styles.iconName}>
            {
                item.icons.map((v, i) => (
                <>
                    <Text style={styles.Name}>{v.title}</Text>
                    {/* <Text style={[styles.Name,styles.special]}>{v.special}</Text> */}
                </>
                ))
            }
            </View>
        </View>
    )
   }
  
const MainList = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>  
        {
            data.map((item,_)=>
            <TouchableOpacity
            key={item.id}
            onPress={()=> navigation.navigate(item.nav)}>
                <Item item={item}/>
            </TouchableOpacity>    
            )
        }
    </View>
  )
}
{
/** 
* ! trying to use map (not sure best practice or not)
* ? using map cause i want to get list inside scrollview
*/
/* <FlatList 
nestedScrollEnabled
data={data}
showsVerticalScrollIndicator={false}
keyExtractor={item=>item.id}
renderItem={({item})=>
<TouchableOpacity onPress={()=>handleButton(item)}>
    <Item item={item}/>
</TouchableOpacity>    
}
/> */}
export default MainList

const styles = StyleSheet.create({
    content:{
        backgroundColor:'red',
        // backgroundColor:'grey',
        marginBottom:20,
        borderRadius:15,
    },
    heading:{
        textAlign:'center',
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        margin:10
    },
    title:{
        textAlign:'center',
        color:'white',
        marginBottom:10,
        paddingHorizontal:10
    },
    iconContainer:{
        flexDirection:'row',
        // justifyContent:'space-around',
        alignItems:'center',
        marginBottom:5,
    },
    icon:{
        flex:1,
        width:30,
        height:30,
    },
    iconName:{
        flexDirection:'row',
        // justifyContent:'space-evenly',
        backgroundColor:'pink',
        // backgroundColor:'grey',
        opacity:0.7,
        overflow:'hidden',
        borderBottomLeftRadius:5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    Name:{
        flex:1,
        textAlign:'center',
        color:'white',
        padding:5,
    },

})