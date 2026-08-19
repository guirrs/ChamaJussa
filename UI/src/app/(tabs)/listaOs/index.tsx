import { ActivityIndicator, FlatList, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./listaOs.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../../components/footer/Footer";
import CardOs from "../../../components/cardOs";
import { useOrdermServico } from "../../../hooks/useOrdemServico";
import { OrdemServico } from "../../../@types";
import { useState } from "react";


// export const ListaOs = () => {
export default function ListaOs() {

  const [filtroStatus, setFiltroStatus] = useState<string>('Todos');

  const {os,erro,loading,recarregar} = useOrdermServico();

  const ordensFiltradas = os.filter((ords) => {
    if(filtroStatus === 'Todos') return true;
    const statusAtual = ords.statusNome || '';
    return statusAtual.toLowerCase().includes(filtroStatus.toLocaleLowerCase());
  })
  
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View>
            <Text style={styles.titulo}>Olá, Késsia</Text>
            <Text style={styles.titulo_lista}>Minhas OSs</Text>
          </View>
        </View>
        <View style={styles.filtros}>
        //tem que estar igualll ao banco 
          {['Todos', 'Aberto', 'Em Andamento', 'Concluída', 'Cancelada'].map((status) => (
            <Pressable
              key={status}
              style={[
                styles.filterbtn,
                filtroStatus === status && { backgroundColor: '#0052CC' },
              ]}
              onPress={() => setFiltroStatus(status)}
            >
              <Text style={styles.filterbtntxt}>{status}</Text>
            </Pressable>
          ))}
        </View>
        {/* Estado de Carregamento (Loading) */}
        {loading && os.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0878F9" />
            <Text style={{ marginTop: 12, color: '#6B7280' }}>Carregando ordens de serviço...</Text>
          </View>
        ) : erro && os.length === 0 ? (
          /* Estado de Erro */
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, color: '#DC2626', textAlign: 'center', marginBottom: 16 }}>
              {erro}
            </Text>
            <TouchableOpacity
              style={[styles.btn_nova_os, { backgroundColor: '#0878F9' }]}
              onPress={() => recarregar()}
            >
              <Text style={styles.btn_text}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Exibição em FlatList com Pull-to-Refresh */
          <FlatList
            data={ordensFiltradas}
            keyExtractor={(item: OrdemServico) => String(item.osId || Math.random())}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={() => recarregar()}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={{ color: '#9CA3AF', fontSize: 16 }}>
                  Nenhuma ordem de serviço encontrada.
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              //card:
              <CardOs
                numOs={item.osId}
                status={item.statusNome}
                titulo={item.nomeItem}
                descricao={item.descricao} />
            )}
          />
        )}
        
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
    
  )
  
}
