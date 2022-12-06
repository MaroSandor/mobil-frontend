import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      username: "",
      password: "",
      users: [
        ["Peter", "asd444"],
        ["Anita", "asd555"],
      ],
      fhnev: "",
      jelszo: "",
      elemUn: "",
    };
  }

  async getLogin() {
    try {
      const response = await fetch("http://192.168.6.15:3000/login");
      const json = await response.json();
      this.setState({ data: json });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getLogin();
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={{ flex: 1, padding: 24, marginTop: 40 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ user_id }, index) => user_id}
            renderItem={({ item }) => (
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 60,
                  width: 300,
                  borderWidth: 1,
                  borderColor: "blue",
                  height: 100,
                }}
              >
                <TextInput
                  style={{ borderWidth: 1, borderColor: "red", fontSize: 20 }}
                  placeholder=" Felhasználónév: "
                  onChangeText={(value) => this.setState({ username: value })}
                  value={this.state.username}
                ></TextInput>
                <TextInput
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: "red",
                    fontSize: 20,
                  }}
                  placeholder=" Jelszó: "
                  onChangeText={(value) => this.setState({ password: value })}
                  value={this.state.password}
                ></TextInput>
                <TouchableOpacity
                  onPress={this.lekerdez}
                  style={{
                    position: "absolute",
                    marginTop: 70,
                    marginLeft: 10,
                  }}
                >
                  <Text>Bejelentkezés</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    marginLeft: 200,
                    marginTop: 70,
                  }}
                >
                  <Text>Regisztráció</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});