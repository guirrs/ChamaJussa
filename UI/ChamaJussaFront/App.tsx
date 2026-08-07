import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/app/login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import Detalhe from './src/app/detalhe';
import Listagem from './src/app/listagem';
import CriarOS from './src/app/criarOs';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return null; // Segura a tela até carregar as fontes
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <StatusBar style='auto'/>
        <CriarOS/>
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