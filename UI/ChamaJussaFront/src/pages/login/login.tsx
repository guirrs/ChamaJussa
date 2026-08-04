import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'


//rfce cria essa estrutura rapida com a extensao: ES7+ React/Redux/React-Native snippets
const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../../assets/imgs/logo.png')} />
            <View style={styles.formulario}>
                    <Text style={styles.titulo}>Chama Jussa</Text>
                    <Text style={styles.subTitulo}>Gerenciamento de Ordens e Servico</Text>
                <View style={styles.campo}>
                    <Text style={styles.tituloCampo}>Email</Text>
                    <TextInput placeholder='email@gmail.com' style={styles.input} />
                    <Text style={styles.tituloCampo}>Senha</Text>
                    <TextInput placeholder='senha' style={styles.input} />
                    <Pressable style={styles.botao}>Acessar o Sistema</Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F4F6',
        //sempre importante deixar o flex para que preenche os espacos vazios
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
        fontSize: 16,
    },
    imagem:{
        marginTop: "10%"
    },
    formulario: {
        backgroundColor: "#FFFFFF",
        height: "65%",
        width: "80%",
        alignItems: "center",
        fontSize: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    titulo: {
        paddingTop: 40,
        fontSize: 24,
        fontWeight: 'bold'
    },
    subTitulo: {
        color: "#7D7D7D",
        paddingBottom: 40
    },
    campo:{
        width: "80%",
        fontWeight: 'bold',
    },
    tituloCampo:{
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: "#F3F4F6",
        padding: "3%",
        marginTop: "2%",
        marginBottom: "5%"
    },
    botao:{
        alignItems: "center",
        backgroundColor: "#10B981",
        color: "white",
        height: "30%",
        justifyContent: "center"
    }
})

export default Login