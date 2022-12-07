import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

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
      <View style={styles.main_container}>
        {this.state.velemenyek.map((elem) => (
          <View style={styles.container}>
            <View style={styles.jarat_box}>
              <Text sytle={styles.jarat_szam} key={elem.route_short_name}>
                {elem.route_short_name}
              </Text>
            </View>
            <View style={styles.jarat_velemeny}>
              <View style={styles.comfort}>
                <Text sytle={styles.text} key={elem.route_short_name}>
                  Kényelem: {elem.comfort}
                </Text>
              </View>
              <View style={styles.comfort}>
                <Text sytle={styles.text} key={elem.route_short_name}>
                  Forgalom: {elem.crowd}
                </Text>
              </View>
              <View style={styles.comfort}>
                <Text sytle={styles.text} key={elem.route_short_name}>
                  Idő: {elem.time}
                </Text>
              </View>
            </View>
          </View>
          // <View style={styles.containers}>
          //   <View style={{ flex: 1, padding: 20 }}>
          //     <Text sytle={styles.text} key={elem.route_short_name}>{elem.route_short_name}</Text>
          //   </View>
          // </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    margin: 5,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
  },

  container: {
    flexDirection: "row",
    padding: 5,
    height: 75
  },

  jarat_box: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center'
  },

  jarat_velemeny: {
    flex: 4,
    backgroundColor: "darkorange",
    justifyContent: 'center'
  },

  jarat_szam: {
    textAlign: 'center'
  },

  text: {
    color: "black",
    justifyContent: 'center',
    textAlign: 'center'
  },
});
