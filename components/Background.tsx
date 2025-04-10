import React from 'react';

import { ImageBackground, View, StyleSheet } from 'react-native';

const image = require('../assets/images/background.png');

export default function Background() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={StyleSheet.absoluteFillObject} />
  );
}


