import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useColorScheme } from "react-native";
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    console.log("ERROR", error)
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
