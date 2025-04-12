import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={'/(auth)'} />
  }

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: Colors.background,
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          backgroundColor: Colors.background,
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Escaner',
          tabBarIcon: (({ color }) => <FontAwesome6 name='qrcode' size={20} color={color} />)
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          headerShown: false,
          title: 'Administrar',
          tabBarIcon: (({ color }) => <FontAwesome6 name='gear' size={20} color={color} />)
        }}
      />
    </Tabs>
  )
}
