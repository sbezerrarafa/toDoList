import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
