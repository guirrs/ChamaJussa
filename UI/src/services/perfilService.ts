import { Usuario } from "../@types";
import api from "./api";


export const PerfilService = {
    async obterUsuarioId(id: string): Promise<Usuario> {
        const response = await api.get<Usuario>('Usuario/' + id);

        return response.data
    }
}