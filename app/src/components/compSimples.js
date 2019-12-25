import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class compSimples extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.text}> compSimples </Text>
        <Text> compSimples </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:{
        flex: 1        
    }
})
