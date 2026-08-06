import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Footer from '../../components/footer'
import { Texto } from '../../constants/theme'

function Listagem() {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <View>
                    <Text>Ola, Kessia</Text>
                    <Text style={styles.subTitulo}>Minha OSs</Text>
                </View>
                <Pressable style={styles.botaoOS}><Text>Nova OS</Text></Pressable>
            </View>

            <View style={styles.filtros}>
                <Text style={styles.opcao}>Todos</Text>
                <Text style={styles.opcao}>Abertas</Text>
                <Text style={styles.opcao}>Em Andamento</Text>
                <Text style={styles.opcao}>Concluidas</Text>
            </View>

            <View>
                <View style={styles.card}>
                    <View style={styles.titulosCard}>
                        <Text style={styles.numeroOS}>OS - 001</Text>
                        <Text style={styles.statusOS}>Aberta</Text>
                    </View>

                    <Text style={styles.tituloOS}>Vazamento hidráulico no Bloco B</Text>
                    <Text style={styles.descricaoOS}>Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B...</Text>
                </View>
            </View>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F4F6",
        fontSize: 20,
        width: '100%',
        flex: 1
    },
    cabecalho: {
        flexDirection: 'row', 
        gap: 130,
        margin: 20
    },
    subTitulo: {
        fontSize: Texto.titulo,
        fontWeight: 'bold'
    },
    botaoOS: {
        backgroundColor: "#006FFF",
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        width: 105,
        height: 44,
        borderRadius: 10
    },
    filtros: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    opcao: {
        fontSize: Texto.descricao,
        color: '#abababa3',
        backgroundColor: 'white',
        borderColor: '#abababa3',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 6,
        paddingRight: 2
    },
    card: {

        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
        padding: 20
    },
    titulosCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    numeroOS:{
        color: '#006FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    statusOS:{
        color: '#2D87FF',
        backgroundColor: '#DBEAFE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingRight: 8,
        paddingLeft: 8,
        fontWeight: 'bold'
    },
    tituloOS: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    descricaoOS: {
        color: 'abababa3'
    }
})



export default Listagem