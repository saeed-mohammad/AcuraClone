import 'react-native-gesture-handler';
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigations/MyStack';

const App = () => {
  // useEffect(()=>{
  //   cameraRequesting()
    
  // },[])
  // const cameraRequesting=async()=>{
  //   const newCameraPermission = await Camera.requestCameraPermission()
  //   if(newCameraPermission){console.log('permission granted')}
  // }
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App
