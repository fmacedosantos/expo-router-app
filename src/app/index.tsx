import { Link, router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Home() {

  function handleNavigate(){
    router.replace("/dashboard")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página Home</Text>
      <Link href='/profile'>Ir para profile</Link>
      <Link href='/user/123456'>Ir para usuário</Link>
      <Button title="Navegar para o painel" onPress={handleNavigate}/>
    </View>
  );
}
