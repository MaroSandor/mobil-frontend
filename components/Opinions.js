import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class Opinions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      velemenyek: [],
      isLoading: true
    };
  }

  async velemenyekLekeres() {
    try {
      const response = await fetch('http://192.168.154.97:24001/jaratok');
      const json = await response.json();
      console.log(json)
      this.setState({ velemenyek: json });
    } catch (error) {
      console.log("Hiba:", error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { jaratok, isLoading } = this.state;
    
    return (
      <View style={styles.container}>
        {this.state.velemenyek.map((elem) =>
          <Text key={elem.route_short_name} style={styles.text}>{elem}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: 'black'
  }
});