import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Expo Template</Text>

      <Text className="mt-2 text-gray-500">Your boilerplate is ready.</Text>
    </View>
  );
}
