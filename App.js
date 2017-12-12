import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Principal from './src/pages/principal';

export default class App extends Component {
  render() {
    return (
      <Principal />
    );
  }
}
