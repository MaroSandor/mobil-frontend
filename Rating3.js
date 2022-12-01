import React from 'react';
import {
    Button, StyleSheet, View, Text, TextInput
} from 'react-native';
import {
    AirbnbRating
} from 'react-native-ratings';

// # Változók deklarálása
const jaratok = [];
const velemeny = "";
const ertek = "";

// # Függvények létrehozása
const ratingComfort = (rating) => {
    const rating1 = rating
    console.log(rating1)
    return (
        rating1
    )
}

const ratingTime = (rating) => {
    const rating2 = rating
    console.log(rating2)
    return (
        rating2
    )
}

const ratingTraffic = (rating) => {
    const rating3 = rating
    console.log(rating3)
    return (
        rating3
    )
}

// # Adatbázisból adatok lekérése és tömbhöz adása
const felvitel = async () => {
    const [data, setData] = useState([]);

    try {
      const response = await fetch('http://192.168.6.22:3000/film');
      const json = await response.json();
      console.log(json)
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

/* const felvitel = async () => {
    try {
        const response = await fetch('http://192.168.6.40:24001/jaratok');
        const json = await response.json();
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
} */

const App = () => {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.main_content}>
            <View>
                <Text>{text}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {/* IDE JÖN A PICKER */}
                <Text style={styles.rate_text}>Kényelem</Text>
                <AirbnbRating
                    count={5}
                    onFinishRating={(rating) => ratingComfort(rating)}
                    reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                    defaultRating={5}
                    size={40}
                />
                <Text style={styles.rate_text}>Idő</Text>
                <AirbnbRating
                    count={5}
                    onFinishRating={(rating) => ratingTime(rating)}
                    reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                    defaultRating={5}
                    size={40}
                />
                <Text style={styles.rate_text}>Forgalom</Text>
                <AirbnbRating
                    count={5}
                    onFinishRating={(rating) => ratingTraffic(rating)}
                    reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                    defaultRating={5}
                    size={40}
                />
                <TextInput
                    style={styles.rate_comment_input}
                    placeholder="Mond el a véleményed a járatról..."
                    onChangeText={(text) => setText(text)}
                    value={this.ertek}
                />
                <Button
                    style={styles.felvitel_btn}
                    onPress={() => felvitel()}
                    title="Felvitel"
                />
            </View>
        </View>
    )
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
})

export default App;

/* import React, { Component } from "react";
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
        }
    };

    async getJarat(ertek) {
        try {
            const response = await fetch("https://localhost:3000/jaratok");
            const json = await response.json();
            this.setState({ jaratok: json.articles });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <View style={styles.main_content}>
                <View style={styles.buttonContainer}>
                {IDE A PICKER AMÚGY}
                    <Text style={styles.rate_text}>Kényelem</Text>
                    <AirbnbRating
                        count={5}
                        onFinishRating={this.ratingCompleted}
                        reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                        defaultRating={5}
                        size={40}
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
*/