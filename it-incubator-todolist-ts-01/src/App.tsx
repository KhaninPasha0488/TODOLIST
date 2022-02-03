import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
export type TaskType ={
    id:string,
    title:string,
    isDone:boolean,

}
export type FilterValueType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValueType
}

function App() {
    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    // let [filter, setFilter] = useState<FilterValueType>("all");

    function removeTask( todolistId:string, id: string) {
        setTasks({...tasks,[todolistId]:tasks[todolistId].filter(f=>f.id !== id )});

    }

    function addTask(todolistId:string,title: string) {
         let newTasks = {id: v1(), title: title, isDone: false};

         setTasks({...tasks, [todolistId] :[newTasks,...tasks[todolistId]] });
    }

    function changeStatus(todolistId:string,taskId: string, isDone: boolean) {

         setTasks({...tasks,[todolistId]:tasks[todolistId].map(m => m.id ===taskId ? {...m, isDone}:m)});
        // console.log(
        //     {...tasks,
        //     [todolistId]:tasks[todolistId].map(m => m.id ===taskId ? {...m, isDone}:m)
        //     })
        // console.log(isDone)
    }
const removeTodo = (todolistId:string) =>{
    setTodolists(todolists.filter(f=>f.id !== todolistId ))
     delete tasks[todolistId]
    setTasks({...tasks})
}

    function changeFilter(todolistId:string,value: FilterValueType) {
        // setFilter(value);
        setTodolists(todolists.map((m)=>m.id === todolistId ? {...m,filter:value}:m))
    }


    return (
        <div className="App">
            {todolists.map((tl,index)=>{
                let tasksForTodolist = tasks[tl.id];
                if (tl.filter === "active") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
                }
                return(
                    <Todolist
                        key={index}
                        todolistId={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodo={removeTodo}
                    />
                )
            })}

        </div>
    );
}

export default App;