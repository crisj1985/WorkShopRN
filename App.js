import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>WorkShop REACT NATIVE Cristian Jácome</Text>
      <Button title= 'Bienvenida' 
      onPress={ () => {
        Alert.alert('Bienvenido Cristian')
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
