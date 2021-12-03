import * as React from 'react';
import { View, Text } from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre esta App</Text>
      <Text>App creada en react native con expo</Text>
      <Text>MirandaLucasAbel/aplicaciones-moviles-tp1</Text>
    </View>
  );
}