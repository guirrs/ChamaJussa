import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
    async listar() : Promise<OrdemServico[]>{
        const resposta = await api.get<OrdemServico[]>('OrdemServico');

        return resposta.data;
    }
}

export default ordemServicoService; 