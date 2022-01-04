import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    let arrForTodolist1=[
        {id:1, title:'HTML&CSS', isDone:false},
        {id:2, title:'JS', isDone:true},
        {id:3, title:'React', isDone:false},
    ]

    let arrForTodolist2=[
        {id:1, title:'HTML&CSS22222', isDone:true},
        {id:2, title:'JS22222', isDone:false},
        {id:3, title:'React222222', isDone:true},
    ]

    return (
        <div className="App">
            <Todolist titles={'What to learn11'} arrForTodolist1={arrForTodolist1}/>
            <Todolist titless={'What to learn22'} arrForTodolist1={arrForTodolist2}/>
        </div>
    );
}

export default App;
