import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

function Footer() {

    const router = useRouter();

    function acessarLista(){
        router.replace('/listagem');
    }

    function acessarCriarOs(){
        router.replace('/criarOs');
    }

    function acessarNotificacoes(){
        router.replace('/notificacao');
    }

    return (
        <View style={styles.container}>
                <Pressable style={styles.opcao} onPress={acessarLista}>
                    <Image style={styles.imagemLista} resizeMode="contain" source={require("../../assets/imgs/Lista.png")} />
                    <Text>Minha OS</Text>
                </Pressable>
                <Pressable style={styles.opcao} onPress={acessarCriarOs}>
                    <Image style={styles.imagemCriar} resizeMode="contain" source={require("../../assets/imgs/Criar.png")} />
                    <Text>Criar OS</Text>
                </Pressable>
                <Pressable style={styles.opcao} onPress={acessarNotificacoes}>
                    <Image style={styles.imagemSino} resizeMode="contain" source={require("../../assets/imgs/Notificacoes.png")} />
                    <Text>Notificacoes</Text>
                </Pressable>
                <Pressable style={styles.opcao} >
                    <Image style={styles.imagemPerfil} resizeMode="contain" source={require("../../assets/imgs/Perfil.png")} />
                    <Text>Perfil</Text>
                </Pressable>
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