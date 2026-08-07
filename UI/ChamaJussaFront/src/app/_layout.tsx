import { Stack } from "expo-router"

export default function RootLayout(){
    return(
        // como se fosse uma pilha das telas, a primeira tela que aparece é a de login, depois a de listagem e por fim a de detalhe
        <Stack>
            <Stack.Screen name="login/index" options={{
                title:"login",
                headerShown: false
            }}/>
            <Stack.Screen name="listagem/index" options={{
                title:"listagem",
                headerShown: false,

            }}/>
            <Stack.Screen name="detalhe/index" options={{
                title:"detalhe",
                headerShown: false
            }}/>
            <Stack.Screen name="criarOs/index" options={{
                title:"criarOs",
                headerShown: false
            }}/>
            <Stack.Screen name="notificacao/index" options={{
                title:"notificacao",
                headerShown: false
            }}/>
        </Stack>
    )
}