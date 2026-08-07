import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/theme";

export default function Notificacao() {
    return (
        <View style={styles.container}>
            <Text>Notificacoes </Text>
            <View style={styles.lista}>
                <View style={styles.item}>
                    <Image resizeMode="contain" source={require("../../assets/imgs/Notificacao.png")} />
                    <View>
                        <Text>Ordem de Serviço finalizada</Text>
                        <Text>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>
                        <View>
                            <Text>22/06/2026</Text>
                            <Text>16:03</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.corDeFundo
    },
    lista: {
        gap: 10
    },
    item: {
        flexDirection: 'row',
    }
})