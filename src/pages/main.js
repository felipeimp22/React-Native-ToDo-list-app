import React, { Component } from "react";
import "../config/statusBar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button
} from "react-native";

export default class App extends Component {
  static navigationOptions = {
    title: "ToDo List"
  };
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      itens: []
    };

    this.insert = this.insert.bind(this);
  }

  renderProducts(obj) {
    return <Text style={styles.toDo}>{obj.item.description}</Text>;
  }

  insert() {
    let newItem = {
      key: this.state.itens.length.toString(),
      description: this.state.text,
      done: false
    };
    let itens = this.state.itens;
    itens.push(newItem);
    this.setState({ itens });

    let text = "";
    this.setState({ text });

    alert(JSON.stringify("voce fez um insert"));
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.itens}
          renderItem={this.renderProducts}
          extraData={this.state}
        />
        <View style={styles.buttons}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.setState({ text });
            }}
            value={this.state.text}
          />
          <Button style={styles.btn} onPress={this.insert} title="insert" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#f5FCff"
  },
  list: {
    marginTop: 20
  },
  toDo: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#c0d7f9",
    fontSize: 20,
    marginBottom: 3,
    borderColor: "#639df9",
    borderWidth: 2,
    borderRadius: 10,
    color: "#FFF"
  },
  input: {
    flex: 1,
    backgroundColor: "#e0ecff",
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    flex: 1
  }
});
