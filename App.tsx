import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

//theme
import { variables } from "./src/theme";

//screen
import Home from "./src/pages/home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          backgroundColor={variables.colors.orange500}
          barStyle="light-content"
        />
        <Home />
      </>
    );
  }
}
