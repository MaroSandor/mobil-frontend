import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { Picker } from '@react-native-picker/picker';

export default class Velemeny extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            velemeny: "",
            ratingComfort: 5,
            ratingTime: 5,
            ratingTraffic: 5,
            jaratok: [],
            isLoading: true,
            image: { uri: "https://i.pinimg.com/originals/88/55/38/8855382d7cdc88c4fee464a2089771c1.jpg" },
        };
    }

    ratingComfort = (rating) => {
        this.setState({ ratingComfort: rating });
    };

    ratingTime = (rating) => {
        this.setState({ ratingTime: rating });
    };

    ratingTraffic = (rating) => {
        this.setState({ ratingTraffic: rating });
    };

    setText = (text) => {
        this.setState({ velemeny: text });
    };

    async jaratokLekeres() {
        try {
            const response = await fetch('http://192.168.154.97:24001/jaratok');
            const json = await response.json();
            console.log(json)
            this.setState({ jaratok: json });
        } catch (error) {
            console.log("Hiba:", error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    felvitel = () => {
        console.log(this.state.ratingComfort);
        console.log(this.state.ratingTime);
        console.log(this.state.ratingTraffic);
        console.log("Ez a véleményem:", this.state.velemeny)
    }

    nyelv_valtoztat_pickerrel = (ertek) => {
        this.setState({ nyelv: ertek })
    }

    componentDidMount() {
        this.jaratokLekeres();
    }

    render() {
        const { jaratok, isLoading } = this.state;

        return (
            <View style={styles.main_content}>
                <ImageBackground source={this.state.image} resizeMode="cover" style={styles.image}>
                    {/* PICKER ELEJE */}
                    <View style={styles.picker_box}>
                        <Picker
                            style={styles.picker}
                            mode='dropdown'
                            selectedValue={this.state.nyelv}
                            onValueChange={(itemValue) => this.nyelv_valtoztat_pickerrel(itemValue)
                            }>
                            {this.state.jaratok.map((elem) =>
                                <Picker.Item key='A' label={elem.route_short_name} value={elem.route_id} />
                            )}
                        </Picker>
                    </View>
                    {/* PICKER VÉGE */}
                    <View style={styles.rating_box}>
                        <Text style={styles.rate_text}>Kényelem</Text>
                        <AirbnbRating
                            count={5}
                            onFinishRating={(rating) => this.ratingComfort(rating)}
                            reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                            defaultRating={5}
                            size={30}
                        />
                        <Text style={styles.rate_text}>Idő</Text>
                        <AirbnbRating
                            count={5}
                            onFinishRating={(rating) => this.ratingTime(rating)}
                            reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                            defaultRating={5}
                            size={30}
                        />
                        <Text style={styles.rate_text}>Forgalom</Text>
                        <AirbnbRating
                            count={5}
                            onFinishRating={(rating) => this.ratingTraffic(rating)}
                            reviews={["Rossz", "Elmegy", "Jó", "Nagyon jó", "Elképesztő"]}
                            defaultRating={5}
                            size={30}
                        />
                    </View>
                    <TextInput
                        style={styles.rate_comment_input}
                        placeholder="Mond el a véleményed a járatról... (opcionális)"
                        onChangeText={(text) => this.setText(text)}
                        defaultValue={""}
                        value={this.velemeny}
                    />
                    <Pressable
                        style={styles.felvitel_btn}
                        onPress={() => this.felvitel()}
                        title="Kiíratás"
                    >
                        <Text style={styles.felvitel_btn_text}>Kiíratás</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_content: {
        backgroundColor: "lightblue",
        flex: 1,
    },

    image: {
        flex: 1,
        justifyContent: "center",
        opacity: 1
    },

    picker_box: {
        width: 250,
        alignSelf: "center"
    },

    picker: {
        backgroundColor: "#42adf5",
        color: "white",
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center"
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
        fontSize: 30,
    },

    rating_box: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
        width: 350,
        alignSelf: "center",
        opacity: 0.7
    },

    felvitel_btn: {
        backgroundColor: "lightgreen",
        padding: 15,
        alignSelf: "center",
        borderRadius: 15,
        textTransform: "uppercase",
    },

    felvitel_btn_text: {
        textTransform: "uppercase",
        fontFamily: "sans-serif",
    },
});
/*
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
}
*/