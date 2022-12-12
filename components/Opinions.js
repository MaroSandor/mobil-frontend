import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, DevSettings, Modal, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Opinions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      velemenyek: [],
      isLoading: true,
      modalVisible: false,
      id: 0,
      reszletkerdes: "",
      jaratszam: 0,
      comfort: 5,
      time: 5,
      crowd: 5
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

  reszletek = (id) => {
    for (let index = 0; index < this.state.velemenyek.length; index++) {
      const element = this.state.velemenyek[index];
      if (element.route_id == id) {
        this.setState({ reszletkerdes: element.opinion_comment })
      }
    }
  }

  reszletek_megjelenit = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    this.velemenyekLekeres();
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <ScrollView key={'valami'}>
        <View style={styles.main_container}>
          {this.state.velemenyek.map((elem) => (
            <View key={elem.route_id} style={styles.container}>
              <View style={styles.jarat_box}>
                <Text style={styles.jarat_szam} key={elem.route_short_name.toString()}>
                  {elem.route_short_name}
                </Text>
              </View>
              <View style={styles.jarat_velemeny}>
                <TouchableOpacity key={elem.route_id} onPress={() => { this.reszletek_megjelenit(true), this.reszletek(elem.route_id) }}>
                  <View style={styles.comfort}>
                    <Text style={styles.text} key={elem.route_short_name.toString()}>
                      <Text key={elem.route_short_name.toString()} style={{ color: 'red' }}>Kényelem: </Text>{elem.comfort}
                    </Text>
                  </View>
                  <View style={styles.comfort}>
                    <Text style={styles.text} key={elem.route_short_name.toString()}>
                      <Text key={elem.route_short_name.toString()} style={{ color: 'red' }}>Forgalom: </Text>{elem.crowd}
                    </Text>
                  </View>
                  <View style={styles.comfort}>
                    <Text style={styles.text} key={elem.route_short_name.toString()}>
                      <Text key={elem.route_short_name.toString()} style={{ color: 'red' }}>Idő: </Text>{elem.ido}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal_main_title}>Részletes vélemény:</Text>
                  {this.state.reszletkerdes != ""
                  ?
                  <Text>{this.state.reszletkerdes}</Text>
                  :
                  <Text>Ennél az értékelésnél nincs részletes vélemény!</Text>
                  }
                </View>
                <Pressable
                  onPress={() => this.reszletek_megjelenit(!modalVisible)}
                >
                  <Text style={[styles.textStyle, { marginTop: 25 }]}>
                    <MaterialIcons style={{ color: 'black', fontSize: 50 }} name="cancel" />
                  </Text>
                </Pressable>
                {/* CONTENT */}
              </View>
            </View>
          </Modal>
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
    paddingLeft: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
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
  },

  icon: {
    fontSize: 50,
    color: 'white'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  close_btn: {
    alignSelf: 'flex-end'
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
