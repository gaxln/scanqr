import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, Dimensions, Keyboard, Animated } from "react-native";
import { styles } from '@/styles/auth.styles';
import Background from "@/components/Background";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const logo = require('@/assets/images/logo.png');
const { width, height } = Dimensions.get('window');
const logoSize = width * 0.8

export default function Index() {
  return (
    <>
      <Background />
      <View style={loginStyles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={loginStyles.logo} />
      </View>

      <View style={loginStyles.loginContainer}>
        <View style={loginStyles.loginForm}>
          <Text style={[styles.title, { marginHorizontal: 20, marginTop: 30, fontSize: 30, marginBottom: 10, }]}>Iniciar Sesión</Text>

          <View style={loginStyles.loginSection}>
            <FontAwesome6 name="user-large" size={20} color={"#fff"} styles={loginStyles.icon} />
            <TextInput placeholder="Usuario" style={loginStyles.textInput} placeholderTextColor={'#fff'} multiline={false} scrollEnabled numberOfLines={1} />
          </View>

          <View style={loginStyles.loginSection}>
            <FontAwesome6 name="lock" size={20} color={"#fff"} styles={loginStyles.icon} />
            <TextInput placeholder={"Contraseña"} style={loginStyles.textInput} placeholderTextColor={'#fff'} secureTextEntry maxLength={50} multiline={false} numberOfLines={1} />
          </View>

          <TouchableOpacity style={[loginStyles.button, loginStyles.buttonLogIn]}>
            <Text style={[loginStyles.buttonText, { color: '#000', fontSize: 20, fontFamily: 'PrimaryMedium' }]}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <View style={loginStyles.separator} />
          <TouchableOpacity style={[loginStyles.button, loginStyles.buttonRegister]}><Text style={[loginStyles.buttonText, { fontFamily: 'PrimaryRegular' }]}>Registrarse</Text></TouchableOpacity>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#01204A',
    borderWidth: 1,
    borderColor: '#012',
    flexDirection: 'column',
    minHeight: "50%",
  },
  textInput: {
    flex: 1,
    minHeight: 50,
    fontSize: 16,
    fontFamily: 'PrimaryRegular',
    color: '#fff',
    marginLeft: 5,
    backgroundColor: '#001839',
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001839',
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
    backgroundColor: '#AABE29',
    borderRadius: width * 0.2,
    minHeight: height * 0.06,
  },
  buttonRegister: {
    backgroundColor: '#023377',
    minHeight: height * 0.07,
  },
  buttonText: {
    fontFamily: 'PrimaryRegular',
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
