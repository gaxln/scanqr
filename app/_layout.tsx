import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'PrimaryRegular': require('@/node_modules/@expo-google-fonts/geist/400Regular/Geist_400Regular.ttf'),
    'PrimaryMedium': require('@/node_modules/@expo-google-fonts/geist/500Medium/Geist_500Medium.ttf'),
    'PrimarySemiBold': require('@/node_modules/@expo-google-fonts/geist/600SemiBold/Geist_600SemiBold.ttf'),
    'PrimaryBold': require('@/node_modules/@expo-google-fonts/geist/700Bold/Geist_700Bold.ttf'),
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
