import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { styles } from '@/styles/auth.styles';
import Background from "@/components/Background";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const logo = require('@/assets/images/logo.png');

export default function Index() {
  return (
    <>
      <Background />
      <View style={loginStyles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={loginStyles.logo} />
      </View>

      <View style={loginStyles.loginContainer}>
        <View style={loginStyles.loginForm}>
          <Text style={[styles.title, { marginHorizontal: 20, marginTop: 20, }]}>Iniciar Sesión</Text>

          <View style={loginStyles.loginSection}>
            <FontAwesome6 name="user-large" size={15} styles={loginStyles.icon} />
            <TextInput placeholder="Usuario" style={loginStyles.textInput} multiline={false} scrollEnabled numberOfLines={1} />
          </View>

          <View style={loginStyles.loginSection}>
            <FontAwesome6 name="lock" size={15} styles={loginStyles.icon} />
            <TextInput placeholder={"Contraseña"} style={loginStyles.textInput} secureTextEntry maxLength={50} multiline={false} numberOfLines={1} />
          </View>

          <TouchableOpacity style={[loginStyles.button, loginStyles.buttonLogIn]}><Text style={loginStyles.buttonText}>Iniciar Sesión</Text></TouchableOpacity>
          <View style={loginStyles.separator} />
          <TouchableOpacity style={[loginStyles.button, loginStyles.buttonRegister]}><Text style={[loginStyles.buttonText, { fontFamily: 'PoppinsRegular' }]}>Registarse</Text></TouchableOpacity>
        </View>
      </View >
    </>
  );
}

export const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginForm: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#01204A',
    flexDirection: 'column',
    minHeight: "50%",
  },
  textInput: {
    flex: 1,
    minHeight: 50,
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    color: '#000',
    marginLeft: 5,
    backgroundColor: 'white',
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 25,
  },
  icon: {
    marginLeft: 100,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: "75%",
    height: "75%",
    borderRadius: 150,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
    minHeight: '15%',
  },
  buttonLogIn: {
    backgroundColor: '#AABE29',
  },
  buttonRegister: {
    backgroundColor: '#023377',
  },
  buttonText: {
    fontFamily: 'PoppinsBold',
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
