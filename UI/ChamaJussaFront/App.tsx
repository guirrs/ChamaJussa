import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/login';
import listagem from './src/pages/listagem/listagem';
import Listagem from './src/pages/listagem/listagem';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello Word!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Listagem/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
