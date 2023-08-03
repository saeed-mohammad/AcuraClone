import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View ,PermissionsAndroid} from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

/**
 * 
 * ! for notification testing im using fcm test 
 * ? for handling notification it use 3 things :
 * ? 1:android permission
 * ? 2:message token
 * ? 3:server key for fcm
 * 
 * server_Id:AAAAnYoETkc:APA91bHmHI91R0iQS7D9mITeFiAG8IPL7xvn356lDPj2V-x61HiR4SocET_95b83FAJHUCvhGFU3xeCOJ8ziGRWCzct8CknlVRJqkKtIdYTpecNAfi--VZ_HqEFrJE8We2QGnqPrXR0h
 * Token_id:ea8zPdhJR8GsNgV_6kQAW4:APA91bHRcLHZoE9Wn-ufEKtAJ6t4IweBeg4MzPE7CMEcNCrPSM-5oCKpOS5GzQipXS4LuMK-uI1Bgh9BplWMhYeQ8lcBg79g45kR6sL7an2VgJYk-RCtO5DoqwSvOdPP-hPC8bT9QkGT
 */

const Test = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

// for messaging using fcm testing...
  useEffect(()=>{
    // permission for notification
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
    getToken()
  },[])
// getting token...
  const getToken=async()=>{
    const token =await messaging().getToken();
    // console.log(token)
  }
// forground notification...
    useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
    }, []);
// create an account...
    const handlefire=()=>{
      // console.log('ckeck',email,password)
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Id successfully created!')
        setemail('')
        setpassword('')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    }
//sign in
    const signIn=()=>{
      auth()
      .signInWithEmailAndPassword(email,password)
      .then(() => {
        console.log('hello user');
        Alert.alert('user login')
        setemail('')
        setpassword('')
      })
      .catch(error => {
        console.error(error);

      });
    }
  return (
    <View style={{flex:1}}>
      
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Firebase authentication</Text>

        <TextInput style={styles.input} placeholder='enter Email' 
        value={email}
        onChangeText={(val)=>setemail(val)}/>

        <TextInput style={styles.input} placeholder='enter password' 
        value={password}
        onChangeText={(val)=>setpassword(val)}/>

        <TouchableOpacity style={styles.btn} onPress={handlefire}>
            <Text style={styles.btnTxt}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={signIn}>
            <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    btn:{backgroundColor:'red',marginBottom:10},
    btnTxt:{padding:10,color:'white'},
    input:{borderWidth:1,width:'90%',margin:10}
})