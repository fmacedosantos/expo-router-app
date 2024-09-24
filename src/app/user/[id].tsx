import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  const {id} = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página com ID: {id}</Text>
    </View>
  );
}
