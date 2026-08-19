import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import { Alert } from "react-native";
import { ordemServicoService } from "../services/ordemServicoService";
import ListaOs from "../app/(tabs)/listaOs";

export function useOrdermServico(){
    const [os, setOs] = useState<OrdemServico[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState<string | null>(null)


    async function listarOs() {
        try {
            setLoading(true);
            setErro(null)

            const dados = await ordemServicoService.listar();
            setOs(dados);
        } catch (error) {
            Alert.alert("Erro", "Deu erro no listagem")
        } finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        listarOs();
    }, [])

    return {
        os,
        loading,
        erro,
        recarregar: listarOs
    }
}

export default ListaOs;