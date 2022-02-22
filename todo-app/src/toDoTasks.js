import React, { Component } from "react";
import "./toDoApp.css";
 
class ToDoTasks extends Component {
   constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(task) {
      return <li onClick={() => this.delete(task.key)} key={task.key}>{task.text}</li>
    }
  delete(key) {
    this.props.delete(key);
  }
    
  render() {
    var todoTasks = this.props.entries;
    var listItems = todoTasks.map(this.createTasks);
  
    return (
      <ul className="List">
          {listItems}
      </ul>
    );
  }
};
 
export default ToDoTasks;