import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './toDoApp';

var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);
