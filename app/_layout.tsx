import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'PoppinsRegular': require('../node_modules/@expo-google-fonts/poppins/400Regular/Poppins_400Regular.ttf'),
    'PoppinsSemiBold': require('../node_modules/@expo-google-fonts/poppins/600SemiBold/Poppins_600SemiBold.ttf'),
    'PoppinsBold': require('../node_modules/@expo-google-fonts/poppins/700Bold/Poppins_700Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack >
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
