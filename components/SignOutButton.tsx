import { useClerk } from '@clerk/clerk-expo';

import * as Linking from 'expo-linking'
import { TouchableOpacity, Text } from 'react-native';

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
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;
