import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonBasics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            velemenyek: [],
            isLoading: true,
            modalVisible: false,
            id: 0,
            reszletkerdes: ""
        };
    }

    async velemenyekLekeres() {
        try {
            const response = await fetch("http://maro-sandor-peter.dszcbaross.tk/velemenyek");
            const json = await response.json();
            console.log(json);
            this.setState({ velemenyek: json });
        } catch (error) {
            console.log("Hiba:", error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.velemenyekLekeres();
    }

    valamifunk = (id) => {
        for (let index = 0; index < this.state.velemenyek.length; index++) {
            const element = this.state.velemenyek[index];
            if (element.route_id == id) {
                this.setState({ reszletkerdes: element.opinion_comment })
            }
        }
    }

    render() {
        const { velemenyek } = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                    data={velemenyek}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.valamifunk(item.route_id)}>
                            <View style={styles.buttton}>
                                <Text style={{ textAlign: 'center' }}>{item.route_id}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.valami}>
                    <Text>{this.state.reszletkerdes}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    buttton: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        margin: 10
    }
});