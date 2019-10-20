import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';



export default class TodoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    const {navigation} = this.props;
    const todoItem  = navigation.getParam('data');
    return (
      <View>
        <Text>Status: </Text>
        <Text>Body : TodoDetailScreen </Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 15,
    padding: 10


  },
});