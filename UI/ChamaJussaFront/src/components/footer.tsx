import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Footer() {
  return (
    <View style={styles.container}>
        <View style={styles.opcao}>
            <Image style={styles.imagemLista} source={require("../../assets/imgs/Lista.png")}/>
            <Text>Minha OS</Text>
        </View>
        <View style={styles.opcao}>
            <Image style={styles.imagemCriar} source={require("../../assets/imgs/Criar.png")}/>
            <Text>Criar OS</Text>
        </View>
        <View style={styles.opcao}>
            <Image style={styles.imagemSino} source={require("../../assets/imgs/Sininho.png")}/>
            <Text>Notificacoes</Text>
        </View>
        <View style={styles.opcao}>
            <Image style={styles.imagemPerfil} source={require("../../assets/imgs/User.png")}/>
            <Text>Perfil</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        position: 'absolute', bottom: 0, left: 0 , right: 0,
        height: '12%',
        alignItems: 'center',
    },
    opcao:{
        alignItems: 'center',
        textAlign: 'center',
        gap: 10
    },
    imagemLista:{
        height: 35,
        width: 40
    },
    imagemSino:{
        height: 35
    },
    imagemPerfil:{
        height: 35
    },
    imagemCriar:{
        height: 35,
        width: 33
    },
})

export default Footer