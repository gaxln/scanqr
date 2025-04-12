import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react';

export default function QRScannerScreen() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    requestPermission();
  }, [])

  const requestPermission = async () => {
    if (!cameraPermission?.granted) {
      await requestCameraPermission();
    }
  }

  if (!cameraPermission) {
    return <View><Text>Verificando permisos de la cámara...</Text></View>
  }

  if (!cameraPermission.granted) {
    return (
      <View>
        <Text>Necesitamos el permiso de la cámara para usar el escaner</Text>
        <TouchableOpacity onPress={requestCameraPermission}>
          <Text>Conceder permiso</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        facing='back'
        style={styles.camera}
      >
      </CameraView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    marginBottom: -40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
})
