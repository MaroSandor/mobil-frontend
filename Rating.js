import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default class Bevitel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            velemeny: "",
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: "lightblue" }}>
                <View style={styles.buttonContainer}>
                    <Text>Név:</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Írd be a neved!"
                        onChangeText={(beirtszoveg) => this.setState({ nev: beirtszoveg })}
                        value={this.state.velemeny}
                    />
                    <Button
                        onPress={() => this.felvitel()}
                        title="Felvitel"
                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_content: {

    },
})