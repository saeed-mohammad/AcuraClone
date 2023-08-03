import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Country from '../screens/Country';
import IdCards from '../screens/IdCards';
import FaceMatch from '../screens/FaceMatch';
import FingerPrint from '../screens/FingerPrint';
import IdCamera from '../screens/IdCamera';
import Test from '../screens/Test';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Test" component={Test} options={{headerShown:true}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Country" component={Country} options={{headerShown:false}} />
      <Stack.Screen name="IdCards" component={IdCards} 
      options={{
        headerShown:false
        }} />

      <Stack.Screen name="ACCURA FACE MATCH" component={FaceMatch} 
      options={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
      }}/>

      <Stack.Screen name="FINGER PRINT MATCH" component={FingerPrint}
      options={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18,
        },
        }}/>
        <Stack.Screen name="IdCamera" component={IdCamera} 
      options={{
        headerShown:false
        }} />
    </Stack.Navigator>
  );
}