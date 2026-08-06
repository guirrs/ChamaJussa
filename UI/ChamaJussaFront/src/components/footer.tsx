import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Footer() {
    return (
        <View style={styles.container}>
                <View style={styles.opcao}>
                    <Image style={styles.imagemLista} resizeMode="contain" source={require("../../assets/imgs/Lista.png")} />
                    <Text>Minha OS</Text>
                </View>
                <View style={styles.opcao}>
                    <Image style={styles.imagemCriar} resizeMode="contain" source={require("../../assets/imgs/Criar.png")} />
                    <Text>Criar OS</Text>
                </View>
                <View style={styles.opcao}>
                    <Image style={styles.imagemSino} resizeMode="contain" source={require("../../assets/imgs/Notificacoes.png")} />
                    <Text>Notificacoes</Text>
                </View>
                <View style={styles.opcao}>
                    <Image style={styles.imagemPerfil} resizeMode="contain" source={require("../../assets/imgs/Perfil.png")} />
                    <Text>Perfil</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        position: 'absolute', bottom: 0, left: 0, right: 0,
        margin: 0,
        height: "10%",
        alignItems: 'center',
    },
    opcao: {
        alignItems: 'center',
        textAlign: 'center',
        gap: 10
    },
    imagemLista: {
        height: 30,
        width: 40
    },
    imagemSino: {
        height: 35
    },
    imagemPerfil: {
        height: 35
    },
    imagemCriar: {
        height: 30,
        width: 33
    },
})

export default Footer