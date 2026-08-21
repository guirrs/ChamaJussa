import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import ordemServicoService from "../services/ordemServicoService";

export function useDetalheOs(id: string) {
    const [os, setOs] = useState<OrdemServico | null>(null);

    async function carregarOs() {
        try {
            const dados = await ordemServicoService.buscarPorId(id);
            setOs(dados);
        }
        catch (error) {
            console.log("Nao foi possivel carrefar os detalhes da ordem de sercico.")
        }
    }

    useEffect(() => {
        carregarOs()
    }, [])

    const formartarData = (dataStr? : string) =>{
        if(!dataStr) return '';
        try {
            const data = new Date(dataStr);
            return isNaN(data.getTime()) ? dataStr : data.toLocaleString('pt-BR');
        } catch (error) {
            return dataStr
        }
    }

   const osIdentificador = os?.osId
        ? `OS-${String(os.osId).padStart(3, '0')}`
        : id
        ? `OS-${String(id).padStart(3, '0')}`
        : 'OS';

    return {
        os,
        dataFormatada : formartarData(os?.dtCriacao),
        osIdentificador
    }
}