import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={'/(tabs)'} />
  }

  return (<Stack screenOptions={{
    contentStyle: {
      backgroundColor: Colors.background,
    }
  }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>)
}
