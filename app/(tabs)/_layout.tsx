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

  const renderTabButton = (iconName: string, label: string) => (props: BottomTabBarButtonProps) => {
    const isSelected = props.accessibilityState?.selected;
    return (
      <Pressable
        {...props}
        android_ripple={null}
        style={({ pressed }) => [
          {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 18,
            marginHorizontal: 10,
            borderRadius: 20,
            backgroundColor: isSelected ? Colors.secondary : Colors.background_400,
          }
        ]}
      >
        <FontAwesome6
          name={iconName}
          size={20}
          color={isSelected ? '#fff' : Colors.background_200}
        />
        {isSelected && <Text style={[{ color: isSelected ? '#fff' : Colors.background_200, marginLeft: 10 }, fonts.medium]}>{label}</Text>}
      </Pressable>
    )
  }

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: Colors.background
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
