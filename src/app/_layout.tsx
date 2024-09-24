import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212"
        },

        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home"}} />
      <Stack.Screen name="profile" options={{ title: "Perfil"}} />
      <Stack.Screen name="user/[id]" options={{ title: "Usuário"}} />
    </Stack>
  );
}
