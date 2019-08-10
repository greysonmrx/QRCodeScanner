import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends Component {
  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error(`Erro: ${err}`));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={ this.onSuccess }
        topContent={
          <Text style={ styles.centerText }>Escaneando código</Text>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    color: '#777',
    fontWeight: "bold",
    marginTop: 15
  }
});