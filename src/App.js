import React, { Component } from "react";
import "./style.css";
import Todo from "./Todo";

class App extends Component {
  state = {
    value: "",
    todos: []
  };

  handleClick() {
    console.log(this.state.value)
    console.log(this.state.todos)
    var tempArray = this.state.todos
    tempArray.push(this.state.value)
    this.setState({
      todos: tempArray,
      value: ""
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  deleteTodo = (index) => {
    var tempArray = this.state.todos
    tempArray.reverse()
    tempArray.splice(index, 1)
    tempArray.reverse()
    this.setState({
      todos: tempArray
    });
  }

  render() {
    return (
      <div>
        <h1>add your to-do</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e, this.todos, this.i)}
        />
        <button onClick={() => this.handleClick()}>add</button>
        {this.state.todos.slice(0).reverse()
          .map((todo, index) => (
            <Todo deleteTodo={this.deleteTodo} state={this.state} todo={todo} index={index} function={console.log(this.state.todos)} />
          ))}
      </div>
    );
  }
}

export default App;
