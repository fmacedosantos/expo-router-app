import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
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
      <Link href='/dashboard'>Ir para dashboard</Link>
    </View>
  );
}
