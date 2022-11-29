import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class ButtonBasics extends Component {
    render() {
        return (
            <Text>Valami</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});