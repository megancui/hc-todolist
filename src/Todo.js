import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.deleteTodo(this.props.index)}>
          {this.props.todo}
        </h1>
      </div>
    );
  }
}

export default Todo;
