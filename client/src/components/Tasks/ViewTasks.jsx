import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";
import ViewTask from "./ViewTask";
import CreateTask from "./CreateTask";

function ViewTasks() {
  const [taskDependency, setTaskDependency] = useState();
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  let userid = '6353f1a7aeab8208d6c1b8fe';

  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return <ViewTask key={obj._id} obj={obj} userid={userid} taskDependency={taskDependency} setTaskDependency={setTaskDependency}/>
    }))
  }

  useEffect(()=>{
    axios.get(`http://localhost:4000/task/${userid}`,{
        "token": token
    })
      .then(res=>showTask(res))
  }, [taskDependency, token, userid])

  return( 
    <>
      <Nav />
      <main className="viewTasks-body">
        <h1>Tareas</h1>
        <CreateTask userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency}/>
        <section>
          {tasks}
        </section>
      </main>
    </>
  )
}

export default ViewTasks;
