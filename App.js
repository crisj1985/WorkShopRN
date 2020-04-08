import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends Component {
constructor(){
  super();
  this.state = {
    nombre:''
  }
}

  render(){
    return (
      <View style={styles.container}>
        <Text>WorkShop REACT NATIVE Cristian Jácome</Text>
        <TextInput
          placeholder='Nombre'
          value={this.state.nombre}
          onChangeText={(txt) => { this.setState({nombre:txt}) }}
          style={styles.caja}
        />
        <Button title='CLICK ME'
          onPress={() => {
            Alert.alert('Hola ' + this.state.nombre)
          }}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caja:{
    borderColor: 'green',
    borderWidth:1
  }
});
