import React, { Component } from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

export default class Bevitel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jaratok: [],
            velemeny: "",
            WATER_IMAGE: require("./assets/favicon.png"),
            rating: "",
        };
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating);
    }

    felvitel = async () => {
        //alert(this.props.akttema)
        try {
            let adatok = {
                bevitel1: "",
                bevitel2: "",
                bevitel3: "",
                bevitel4: this.state.velemeny,
            };
            const response = await fetch("http://192.168.14.97:3000/felvitel", {
                method: "POST",
                body: JSON.stringify(adatok),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const szoveg = await response.text();
            alert(szoveg);
        } catch (error) {
            console.log(error);
        } finally {
            console.log(szoveg);
        }
    }

    render() {
        return (
            <View style={styles.main_content}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.rate_text}>Kényelem</Text>
                    <AirbnbRating
                        count={5}
                        onFinishRating={this.ratingCompleted}
                        reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                        defaultRating={5}
                        size={50}
                    />
                    <Text style={styles.rate_text}>Idő</Text>
                    <AirbnbRating
                        count={5}
                        onFinishRating={this.ratingCompleted}
                        reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                        defaultRating={5}
                        size={40}
                    />
                    <Text style={styles.rate_text}>Valami más</Text>
                    <AirbnbRating
                        count={5}
                        onFinishRating={this.ratingCompleted}
                        reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                        defaultRating={5}
                        size={40}
                    />
                    <TextInput
                        style={styles.rate_comment_input}
                        placeholder="Mond el a véleményed a járatról..."
                        onChangeText={(beirtszoveg) =>
                            this.setState({ velemeny: beirtszoveg })
                        }
                        value={this.state.velemeny}
                    />
                    <Button
                        style={styles.felvitel_btn}
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
        backgroundColor: "lightblue",
        flex: 1,
    },

    rate_comment_input: {
        height: 125,
        margin: 15,
        padding: 17,
        borderWidth: 2,
        borderRadius: 15,
        textAlignVertical: "top",
        backgroundColor: "#fff",
    },

    rate_text: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 30,
    },

    felvitel_btn: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
});
