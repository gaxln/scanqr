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
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRef, useState } from "react";
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../toastConfig'
import { Colors } from "@/constants/Colors"
import { useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require('@/assets/images/logo.png');
const footer_img = require('@/assets/images/ecopetrol_logo.png')
const { width, height } = Dimensions.get('window');
const logoSize = width * 0.6

function getErrorMessage(err: any): string {
  const code = err.errors?.[0]?.code;
  switch (code) {
    case 'form_identifier_not_found':
      return 'Correo electronico no encontrado'
    case 'form_param_format_invalid':
      return 'Correo electronico incorrecto'
    case 'form_conditional_param_missing':
      return 'Ingresa un correo'
    case 'form_param_nil':
      return 'Ingresa una contraseña'
    case 'form_password_incorrect':
      return 'Contraseña incorrecta'
    default:
      return `${code}`
  }
}

export default function Index() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const refPasswordInput = useRef<TextInput>(null);

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
        alert(JSON.stringify(signInAttempt))
      }
    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: getErrorMessage(err)
      });
      console.log(err.errors[0])
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.loginContainer}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.loginForm}>
          <Text style={[fonts.bold, { marginTop: 15, fontSize: 30, marginBottom: 10, color: Colors.surface, textAlign: 'center' }]}>Iniciar Sesión</Text>

          <View style={styles.loginSection}>
            <FontAwesome name="envelope" size={20} color={Colors.text_surface} />
            <TextInput
              placeholder="Correo Electrónico"
              onChangeText={setEmailAddress}
              style={[styles.textInput]}
              autoCorrect={false}
              placeholderTextColor={'#fff'}
              autoFocus
              autoCapitalize='none'
              autoComplete='email'
              keyboardType='email-address'
              onSubmitEditing={() => refPasswordInput.current?.focus()}
              multiline={false}
              numberOfLines={1}
              returnKeyType="next"
            />
          </View>

          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.loginSection}>
              <FontAwesome name="key" size={20} color={Colors.text_surface} />
              <TextInput
                ref={refPasswordInput}
                placeholder={"Contraseña"}
                onChangeText={setPassword}
                style={[styles.textInput]}
                placeholderTextColor={'#fff'}
                secureTextEntry
                maxLength={50}
                multiline={false}
                numberOfLines={1}
                autoComplete='password'
                onSubmitEditing={onSignInPress}
              />
            </View>

            <TouchableOpacity onPress={onSignInPress} style={[styles.button, styles.buttonLogIn]}>
              <Text style={[styles.buttonText, fonts.semiBold]}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push("/(auth)/signUp") }} style={[styles.button, styles.buttonRegister]}>
              <Text style={[styles.buttonText, fonts.regular]}>Registrarse</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <View style={styles.img_wrapper}>
            <Image source={footer_img} resizeMode="contain" style={styles.footer_logo} />
          </View>
        </View>
      </View >
      <Toast config={toastConfig} topOffset={20} />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    paddingHorizontal: 20,
    width: '100%',
  },
  textInput: {
    ...fonts.regular,
    flex: 1,
    minHeight: 55,
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    backgroundColor: Colors.surface,
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  logo: {
    width: logoSize,
    height: logoSize,
    borderRadius: logoSize / 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  footer_logo: {
    width: 150,
    height: 150,
  },
  img_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonLogIn: {
    backgroundColor: Colors.surface,
    borderRadius: width * 0.2,
    padding: 8,

  },
  buttonRegister: {
    backgroundColor: Colors.primary_200,
    padding: 10,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 25,
  },
})
