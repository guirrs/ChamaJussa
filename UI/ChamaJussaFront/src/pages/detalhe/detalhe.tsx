import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Footer from '../../components/footer'
import { Colors, Texto } from '../../constants/theme'

function Detalhe() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}> 
                <Text style={styles.titulo}>Detalhes da OS-1001</Text>
                <View style={styles.conteudo}>
                    <View style={styles.tituloConteudo}>
                        <Text style={styles.h1}>Vazamento hidraulico</Text>
                        <Text style={styles.h2}>Criada em 17/06/2026, 11:28:58</Text>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.blocoInfo}>
                            <Image source={require("../../../assets/imgs/Ferramenta.png")} />
                            <View>
                                <Text style={styles.tipoBloco}>Maquina/Equipamento</Text>
                                <Text style={styles.detalheBloco}>Tubulacao/Sifao da Pia</Text>
                            </View>
                        </View>
                        <View style={styles.blocoInfo}>
                            <Image source={require("../../../assets/imgs/Local.png")} />
                            <View>
                                <Text style={styles.tipoBloco}>Local / Setor</Text>
                                <Text style={styles.detalheBloco}>Bannheiro Masculino</Text>
                            </View>
                        </View>
                        <View style={styles.blocoInfo}>
                            <Image source={require("../../../assets/imgs/User.png")} />
                            <View>
                                <Text style={styles.tipoBloco}>Solictante</Text>
                                <Text style={styles.detalheBloco}>Kessia Milena</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <Text style={styles.h1}>Descricao do Problema</Text>
                        <Text style={styles.descricao}>Vazamento constante de agua por baixo da pia do banheiro masculino do segundo andar do Bloco B</Text>
                        <Text style={styles.h1}>Fotos do Problema</Text>
                        <Image style={styles.foto} resizeMode="contain" source={require("../../../assets/imgs/CadeiraQuebrada.png")} />
                    </View>
                </View>

                <Pressable style={styles.botao}><Text style={styles.textoBotao}>Editar Solicitacao</Text></Pressable>
            </ScrollView>
            <Footer />
        </View>
    )
}

export default Detalhe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.corDeFundo,
    },
    titulo: {
        fontSize: Texto.titulo,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center'
    },
    conteudo: {
        backgroundColor: Colors.corBranca,
        width: '90%',
        height: 650,
        alignSelf: 'center',
        borderRadius: 10,
    },
    tituloConteudo: {
        margin: 20,
        gap: 10
    },
    h1: {
        fontSize: Texto.subTitulo,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: Texto.descricao,
        color: '#666'
    },
    infos: {
        margin: 20,
        marginTop: 0,
        gap: 20
    },
    blocoInfo: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    tipoBloco: {
        fontSize: Texto.descricao,
        color: '#666'
    },
    detalheBloco: {
        fontSize: Texto.descricao,
        fontWeight: 'bold'
    },
    descricao: {
        fontSize: Texto.descricao,
        color: '#666'
    },
    foto: {
        width: '100%',
    },
    botao: {
        alignItems: "center",
        borderColor: Colors.corAzul,
        borderWidth: 1,
        height: 40,
        width: 300,
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    textoBotao: {
        color: Colors.corAzul,
        fontWeight: 'bold',
        fontSize: Texto.descricao,
    }
})