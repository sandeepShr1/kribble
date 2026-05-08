import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function MapScreen() {
  const { latitude, longitude, title, address } = useLocalSearchParams<{
    latitude: string;
    longitude: string;
    title: string;
    address: string;
  }>();

  const router = useRouter();

  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.0001
  }%2C${lat - 0.0001}%2C${lng + 0.0001}%2C${
    lat + 0.0001
  }&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons name="arrow-back" size={20} color={"#111827"} />
        </TouchableOpacity>

        <View className="flex-1 mx-3">
          <Text
            className="text-gray-900 text-sm font-semibold"
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text className="text-gray-400 text-xs " numberOfLines={1}>
            {address}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(`http://www.google.com/maps?q=${lat},${lng}`)
          }
          className="flex-row items-center gap-1 py-2 px-3  rounded-full bg-blue-50"
        >
          <Ionicons name="navigate-outline" size={20} color={"#111827"} />
          <Text className="text-blue-600 text-xs font-semibold">
            Google Maps
          </Text>
        </TouchableOpacity>
      </View>
      <WebView source={{ uri: mapUrl }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
