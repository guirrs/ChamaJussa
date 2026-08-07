import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors, Texto } from '../../constants/theme'
import { useRouter } from 'expo-router'


//rfce cria essa estrutura rapida com a extensao: ES7+ React/Redux/React-Native snippets
export default function Login() {

    const router = useRouter();

    function acessar() {
        // alert("teste")
        //navigate e o push -> listagem de tela renderizadas
        //ou Adiciona uma nova tela em cima da pilha.
        // router.navigate("/listaOs")
        router.push("/listagem")
        // login -> listaOs
        //replace -> Substitui a tela atual.
        // router.replace("/listaOs")
        // listaOs
    }

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
                    <TextInput placeholder='senha' secureTextEntry={true} style={styles.input} />

                    <Pressable style={styles.botao} onPress={acessar}>
                        <Text style={styles.textoBotao}>Acessar o Sistema</Text>
                    </Pressable>                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.corDeFundo,
        //sempre importante deixar o flex para que preenche os espacos vazios
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
        fontSize: Texto.titulo,
    },
    imagem: {
        marginTop: "10%"
    },
    formulario: {
        backgroundColor: Colors.corBranca,
        height: "45%",
        width: "80%",
        alignItems: "center",
        fontSize: Texto.descricao,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    titulo: {
        paddingTop: 40,
        fontSize: Texto.titulo,
        fontWeight: 'bold',
        fontFamily: Texto.fontFamily
    },
    subTitulo: {
        color: Colors.corInput,
        paddingBottom: 40
    },
    campo: {
        width: "80%",
        fontWeight: 'bold',
    },
    tituloCampo: {
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: Colors.corDeFundo,
        padding: "3%",
        marginTop: "2%",
        marginBottom: "5%"
    },
    botao: {
        alignItems: "center",
        backgroundColor: Colors.corBtnVerde,
        color: Colors.corBranca,
        height: "20%",
        width: "100%",
        borderRadius: 10,
        justifyContent: "center"
    },
    textoBotao: {
        color: Colors.corBranca,
        fontWeight: 'bold'
    }
})