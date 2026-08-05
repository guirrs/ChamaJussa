import React from 'react'
import { Image, Text, View } from 'react-native'

function detalhe() {
  return (
    <View>
        <Text></Text>
        <View>
            <View>
                <Text>Vazamento hidraulico</Text>
                <Text>Criar em 17/06/2026, 11:28:58</Text>
            </View>
            <View>
                <View>
                    <Image source={require("../../../assets/imgs/ferramenta.png")}/>
                    <View>
                        <Text>Maquina/Equipamento</Text>
                        <Text>Tubulacao/Sifao da Pia</Text>
                    </View>
                </View>
                <View>
                    <Image source={require("../../../assets/imgs/Local.png")}/>
                    <View>
                        <Text>Local / Setor</Text>
                        <Text>Bannheiro Masculino</Text>
                    </View>
                </View>
                <View>
                    <Image source={require("../../../assets/imgs/ferramenta.png")}/>
                    <View>
                        <Text>Maquina/Equipamento</Text>
                        <Text>Tubulacao/Sifao da Pia</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default detalhe