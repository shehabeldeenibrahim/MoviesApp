import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import { Root, View } from "native-base";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native-paper";

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
        <View style={{ justifyContent: "center", flex: 1 }}>
          <ActivityIndicator size="large" />
        </View>
      </Root>
    );
  }
  return (
    <Root>
      <Home />
    </Root>
  );
}
