import { Colors } from '@/constants/Colors';
import { fonts } from '@/styles/styles';
import { useClerk } from '@clerk/clerk-expo';

import * as Linking from 'expo-linking'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const SignOutButton = () => {
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    try {
      await signOut()
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={[fonts.bold, { color: Colors.background, fontSize: 18, textAlign: 'center' }]}>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: '100%',
  }
})
export default SignOutButton;
