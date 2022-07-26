import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Components/Home';
import Services from './src/Components/Services';
import About from './src/Components/About';
import Contact from './src/Components/Contact';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} options={{ title: 'Dashboard' }} />
        <Stack.Screen name='Services' component={Services} options={{ title: 'Services' }} />
        <Stack.Screen name='About' component={About} options={{ title: 'About' }} />
        <Stack.Screen name='Contact' component={Contact} options={{ title: 'Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

