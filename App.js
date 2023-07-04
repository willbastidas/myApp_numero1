import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from "./estilos";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.estilosTexto}>prueba de app</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textInput} placeholder='prueba de texto'/>
      <TouchableOpacity >
        <Text style={styles.btnAlert}>precaución</Text>
      </TouchableOpacity>
    </View>
  );
}

