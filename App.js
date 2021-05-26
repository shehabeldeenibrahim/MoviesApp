import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import { Root, View } from "native-base";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const LoadFonts = async () => {
    const fontLoaded = await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    setLoading(false);
  };
  useEffect(() => {
    LoadFonts();
  }, []);

  if (loading) {
    return (
      <Root>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
            backgroundColor: "#111111",
          }}
        >
          <ActivityIndicator size="large" color="#f1f1f1" />
        </View>
      </Root>
    );
  }
  return (
    <Root>
      <StatusBar hidden />
      <Home />
    </Root>
  );
}
