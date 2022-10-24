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

  const deleteTask = (userid,id, taskDependency, setTaskDependency) => {
    axios.delete(`http://localhost:4000/task/${userid}/${id}`, {
      data:{
        "token": localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
      }
    })
    .then(()=>{setTaskDependency(taskDependency ? false :true)})
    .catch(err=>console.log(err))
  }

  const callDelete = (obj) => {
    deleteTask(userid, obj, taskDependency, setTaskDependency)
  }

  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return <ViewTask key={obj._id} obj={obj} />
      // <div key={obj._id}>
      //   <h3>{obj.title}</h3>
      //   <p>{obj.description}</p>
      //   <p>{obj.done ? 'hecha' : 'pendiente'}</p>
      //   {/* <button onClick={deleteTask(userid, obj.id, taskDependency, setTaskDependency)}>Borrar</button> */}
      // </div>

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
