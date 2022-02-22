import React, { Component } from "react";
import ToDoTasks from "./toDoTasks";
 
class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
 
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
   
  addTask(event) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        completed: false,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          tasks: prevState.tasks.concat(newTask) 
        };
      });
     
      this._inputElement.value = "";
    }

    event.preventDefault();
  }

  deleteTask(key) {
    var filteredTasks = this.state.tasks.filter(function (task) {
      return (task.key !== key);
    });
   
    this.setState({
      tasks: filteredTasks
    });
  }

  render() {
    return (
      <div className="Main">
        <div className="header">
          <h1>To-do lista</h1>
          <form onSubmit={this.addTask}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="Lisää tehtävä"></input>
            <button type="submit">+</button>
          </form>
        </div>
        <ToDoTasks entries={this.state.tasks}
                    delete={this.deleteTask}/>
      </div>
    );
  }
}
 
export default ToDoList;