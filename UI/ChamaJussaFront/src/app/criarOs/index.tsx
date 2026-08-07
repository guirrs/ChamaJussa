import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors, Texto } from '../../constants/theme'
import Footer from '../../components/footer'

export default function CriarOS() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar ordem de serviço</Text>
            <View style={styles.conteudo}>
                <View>
                    <Text style={styles.tituloCampo}>Titulo do problema*</Text>
                    <TextInput style={styles.textoInput} placeholder='Digite o titulo do problema' />
                </View>
                <View>
                    <Text style={styles.tituloCampo}>Maquina / Equipamento*</Text>
                    <TextInput style={styles.textoInput} placeholder='Digite o titulo do problema' />
                </View>
                <View>
                    <Text style={styles.tituloCampo}>Local / Setor*</Text>
                    <TextInput style={styles.textoInput} placeholder='Digite o titulo do problema' />
                </View>
                <View>
                    <Text style={styles.tituloCampo}>Descricao do problema*</Text>
                    <TextInput style={styles.textoInputDescricao} placeholder='Digite o titulo do problema' />
                </View>
                <View>
                    <Text style={styles.tituloCampo}>Imagem / Foto do problema*</Text>
                    <TextInput style={styles.textoInput} placeholder='Digite o titulo do problema' />
                </View>

                <Pressable style={styles.botao}>
                     <Text style={styles.textoBotao}>Abrir Ordem de Servico</Text>
                </Pressable>
            </View>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.corDeFundo,
        padding: 30,
        gap: 30
    },
    titulo:{
        fontSize: Texto.titulo,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    conteudo:{
        backgroundColor: Colors.corBranca,
        padding: 30,
        gap: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    tituloCampo: {
        fontSize: Texto.descricao,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textoInput: {
        backgroundColor: Colors.corDeFundo,
        padding: 15,
        borderRadius: 10
    },
    textoInputDescricao: {
        backgroundColor: Colors.corDeFundo,
        padding: 10,
        height: 100,
        textAlignVertical: 'top',
        borderRadius: 10
    },
    botao:{
        alignItems: "center",
        backgroundColor: Colors.corBtnVerde,
        color: Colors.corBranca,
        height: 40,
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 15
    },
    textoBotao:{
        color: Colors.corBranca,
        fontWeight: 'bold',
        fontSize: Texto.descricao,
    }
    
})
