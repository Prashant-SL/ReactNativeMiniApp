import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import Courses from './src/Components/Courses';
import Users from './src/Components/Users';
import Contact from './src/Components/Contact';


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, headerTitleAlign: "center", headerTitleStyle: { fontSize: 20 }, headerBackButtonMenuEnabled: false }} />
        <Stack.Screen name='Courses' component={Courses} options={{ title: 'Courses', headerTitleAlign: "center" }} />
        <Stack.Screen name='Users' component={Users} options={{ title: 'Users', headerTitleAlign: "center", }} />
        <Stack.Screen name='Contact' component={Contact} options={{ title: 'Contact', headerTitleAlign: "center" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;