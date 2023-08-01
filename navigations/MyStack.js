import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Country from '../screens/Country';
import IdCards from '../screens/IdCards';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Country" component={Country} options={{headerShown:false}} />
      <Stack.Screen name="IdCards" component={IdCards} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}