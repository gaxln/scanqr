import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";

import { fonts } from '@/styles/styles';
import Background from "@/components/Background";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../toastConfig'
import { Colors } from "@/constants/Colors"
import { useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require('@/assets/images/logo.png');
const { width, height } = Dimensions.get('window');
const logoSize = width * 0.8

export default function Index() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })
      if (signInAttempt.status == 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <View style={styles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.loginForm}>
          <Text style={[fonts.bold, { marginTop: 15, fontSize: 30, marginBottom: 10, color: 'white' }]}>Iniciar Sesión</Text>

          <View style={styles.loginSection}>
            <FontAwesome6 name="user-large" size={20} color={"#fff"} />
            <TextInput placeholder="Email" onChangeText={setEmailAddress} style={[styles.textInput]} autoCorrect={false} placeholderTextColor={'#fff'}
              autoFocus
              autoCapitalize='none'
              autoComplete='email'
              keyboardType='email-address'
              multiline={false}
              numberOfLines={1}
            />
          </View>

          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.loginSection}>
              <FontAwesome6 name="lock" size={20} color={"#fff"} />
              <TextInput
                placeholder={"Contraseña"}
                onChangeText={setPassword}
                style={[styles.textInput]}
                placeholderTextColor={'#fff'}
                secureTextEntry
                maxLength={50}
                multiline={false}
                numberOfLines={1}
              />
            </View>

            <TouchableOpacity onPress={onSignInPress} style={[styles.button, styles.buttonLogIn]}>
              <Text style={[styles.buttonText, fonts.semiBold]}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <View style={styles.separator} />
            <TouchableOpacity onPress={() => { }} style={[styles.button, styles.buttonRegister]}>
              <Text style={[styles.buttonText, fonts.regular]}>Registrarse</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View >
      <Toast config={toastConfig} topOffset={20} />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginForm: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: '#012',
    flexDirection: 'column',
    padding: 20,
  },
  textInput: {
    ...fonts.regular,
    flex: 1,
    minHeight: 50,
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    backgroundColor: Colors.background_200,
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background_200,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: logoSize,
    height: logoSize,
    borderRadius: logoSize / 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  button: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
  },
  buttonLogIn: {
    backgroundColor: Colors.secondary,
    borderRadius: width * 0.2,
    padding: 8,

  },
  buttonRegister: {
    backgroundColor: Colors.background_400,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  separator: {
    marginTop: 25,
    borderColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth * 2.5,
    marginHorizontal: 15,
  },
})
