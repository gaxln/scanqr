import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Text } from 'react-native';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: '#DFF6DD', // verde claro, por ejemplo
        borderLeftColor: '#22C55E'  // verde más fuerte
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#065F46' // texto más oscuro
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: '#FEE2E2',
        borderLeftColor: '#DC2626'
      }}
      text1Style={{ color: '#7F1D1D', fontSize: 15 }}
      text2Style={{ color: '#991B1B' }}
    />
  ),
};

export default toastConfig;
