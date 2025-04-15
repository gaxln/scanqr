import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react';
import { fonts } from '@/styles/styles';

export default function QRScannerScreen() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [loading, setLoading] = useState<boolean>(true);
  const [scannedQr, setScannedQr] = useState<boolean>(false);

  useEffect(() => {
    requestPermission();
  }, [])

  const requestPermission = async () => {
    if (!cameraPermission?.granted) {
      await requestCameraPermission();
    }
  }

  if (!cameraPermission) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={fonts.medium

    }>Verificando permisos de la cámara...</Text></View>
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

  const onBarcodeScannedCallback = (scanningResult: BarcodeScanningResult) => {
    setScannedQr(true)
    const parts = scanningResult.data.split("_");
    const tag = parts[0];
    const name = parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    alert(`${tag} ${name}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        facing='back'
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={scannedQr ? undefined : onBarcodeScannedCallback}
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
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
  }
})
