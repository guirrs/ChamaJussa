import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/login';
import listagem from './src/pages/listagem/listagem';
import Listagem from './src/pages/listagem/listagem';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <StatusBar style='auto'/>
        <Login/>
      </SafeAreaView>
      {/* // <View style={styles.container}>
      //   <Text>Hello Word!</Text>
      //   <StatusBar style="auto" />
      // </View> */}
      
    </SafeAreaProvider>
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

const styles = StyleSheet.create({
  safeareaview: {
    flex:1
  }
})