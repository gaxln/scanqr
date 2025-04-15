import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/Colors';
import { fonts } from '@/styles/styles';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import ThemedTabBar from '@/components/ThemedTabBar';

export default function TabsLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={'/(auth)'} />
  }

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: Colors.primary
        }
      }}
      tabBar={(props) => <ThemedTabBar {...props} />}
    >
      <Tabs.Screen
        name='scanner'
        options={{
          title: 'Escaner',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Panel',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
