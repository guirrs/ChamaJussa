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

    return os;
}