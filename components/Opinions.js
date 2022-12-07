import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, DevSettings } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Opinions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      velemenyek: [],
      isLoading: true,
    };
  }

  async velemenyekLekeres() {
    try {
      const response = await fetch("http://192.168.154.97:24001/velemenyek");
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

  render() {
    return (
      <ScrollView>
      <View style={styles.main_container}>
        {this.state.velemenyek.map((elem) => (
          <View style={styles.container}>
            <View style={styles.jarat_box}>
              <Text style={styles.jarat_szam} key={elem.route_short_name.toString()}>
                {elem.route_short_name}
              </Text>
            </View>
            <View style={styles.jarat_velemeny}>
              <View style={styles.comfort}>
                <Text style={styles.text} key={elem.route_short_name.toString()}>
                  <Text style={{ color: 'red' }}>Kényelem: </Text>{elem.comfort}
                </Text>
              </View>
              <View style={styles.comfort}>
                <Text style={styles.text} key={elem.route_short_name.toString()}>
                  <Text style={{ color: 'red' }}>Forgalom: </Text>{elem.crowd}
                </Text>
              </View>
              <View style={styles.comfort}>
                <Text style={styles.text} key={elem.route_short_name.toString()}>
                  <Text style={{ color: 'red' }}>Idő: </Text>{elem.ido}
                </Text>
              </View>
            </View>
            <View style={styles.jarat_comment}>
              <MaterialIcons style={styles.icon} name="arrow-right" />
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    margin: 5,
    padding: 10,
    flex: 2,
  },

  container: {
    flexDirection: "row",
    padding: 5,
    height: 100,
  },

  jarat_box: {
    flex: 2,
    backgroundColor: "#555",
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  jarat_velemeny: {
    flex: 5,
    backgroundColor: "#a1a1a1",
    justifyContent: 'center',
    paddingLeft: 15
  },

  jarat_szam: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center",
    color: "white",
  },

  text: {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },

  jarat_comment: {
    flex: 2,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  icon: {
    fontSize: 50,
    color: 'white'
  }
});
