// Imports: Dependencies
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import { Root, View } from "native-base";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import { StatusBar } from "react-native";
import { getMovies } from "./src/Services/movieApi";

export default function App() {
  // States Declarations
  const [loading, setLoading] = useState(true);
  // Load Fonts
  const LoadFonts = async () => {
    const fontLoaded = await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    // After Fonts are Loaded Remove the Loader
    setLoading(false);
  };
  useEffect(() => {
    // Load fonts on Load
    LoadFonts();
  }, []);

  // View
  if (loading) {
    // If still loading fonts show loader
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
          <ActivityIndicator testID="app-loader" size="large" color="#f1f1f1" />
        </View>
      </Root>
    );
  }
  // When Loading fonts is done
  else
    return (
      <Root>
        <StatusBar hidden />
        <Home getMovies={getMovies} />
      </Root>
    );
}
