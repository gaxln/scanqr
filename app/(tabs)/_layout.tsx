import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function TabsLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={'/(auth)'} />
  }

  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ headerShown: false }} />
      <Tabs.Screen name='settings' options={{ headerShown: false }} />
    </Tabs>
  )
}
