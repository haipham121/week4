import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../components/TodoItem';



export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,
      inputText: '',
    };
  }
  onChange = text => {
    this.setState({
      inputText: text
    })
  }
  onSbmit = () => {
    const { todoList } = this.state;
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: ''
    })
    // alert(this.state.inputText);
  }
  onPressTodoItem = id => {
    const { todoList } = this.state;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState({
      todoList: newTodoList,
    }, () => {
      setTimeout(() => {
        this.props.navigation.navigate("TodoDetail",{ data: todo});
      }, 2000)
    });
  }
  render() {
    const { todoList, inputText } = this.state;

    return (
      <ScrollView style={styles.container}>
        {
          todoList.map(item => {
            return <TodoItem data={item} onPressButton={() => this.onPressTodoItem(item.id)} />;
          })
        }
        <TextInput style={styles.input} onChangeText={this.onChange} value={inputText} />
        <Button title="Submit" onPress={this.onSbmit} />
      </ScrollView>

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