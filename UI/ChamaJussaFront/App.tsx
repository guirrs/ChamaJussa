import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import Detalhe from './src/pages/detalhe/detalhe';
import Listagem from './src/pages/listagem/listagem';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return null; // Segura a tela até carregar as fontes
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <StatusBar style='auto'/>
        <Detalhe/>
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