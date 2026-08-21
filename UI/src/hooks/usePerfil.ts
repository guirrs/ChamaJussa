import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "../@types";
import { PerfilService } from "../services/perfilService";

export function usePerfil() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    
    type tokenPayload = {
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
    }

    async function obterUsuario() {
        const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY)

        if (!token) {
            console.log("Token não encontrado");
            return;
        }

        
        const decode = jwtDecode<tokenPayload>(token);
        console.log(decode)

        const userId = decode[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];

        const dados = await PerfilService.obterUsuarioId(userId)

        setUsuario(dados)
    }

    useEffect(() => {
        obterUsuario()
    }, [])

    return {
        usuario
    }
}

export default usePerfil