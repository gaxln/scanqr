import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SignOutButton from '@/components/SignOutButton'
import { useUser } from '@clerk/clerk-expo'
import { fonts } from '@/styles/styles';
import { Colors } from '@/constants/Colors';

export default function SettingsScreen() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', padding: 10 }}>
      <View style={styles.profile_card}>
        <Text style={[fonts.bold, { fontSize: 22, color: Colors.primary }]}>{user?.fullName}</Text>
        <Text style={[fonts.regular, { fontSize: 16, color: Colors.text_surface }]}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>
      <SignOutButton />
    </View >
  )
}

const styles = StyleSheet.create({
  profile_card: {
    backgroundColor: Colors.surface,
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
})
