import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
