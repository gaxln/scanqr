import { View, Text } from 'react-native'
import React from 'react'
import SignOutButton from '@/components/SignOutButton'

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
      <SignOutButton />
    </View>
  )
}
