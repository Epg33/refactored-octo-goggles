import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";
import CreateTask from "./CreateTask";

function ViewTasks() {
  const [openCreate, setOpenCreate] = useState(false);
  const [taskDependency, setTaskDependency] = useState();
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  let userid = '63581cf82aff19b47488c5f9';

  const deleteTask = (id, taskDependency, setTaskDependency) => {
    axios
      .delete(`http://localhost:4000/task/${id}`, {
        data: {
          token: localStorage.getItem("AuthTokenForLoginInThisSpecificApp"),
        },
      })
      .then(() => {setTaskDependency(taskDependency ? false : true)})
      .catch((err) => console.log(err));
  };

  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return (
        <div key={obj._id}>
          <h3>{obj.title}</h3>
          <p>{obj.description}</p>
          <p>{obj.done ? "hecha" : "pendiente"}</p>
          <button>Actualizar</button>
          <button onClick={()=>deleteTask(obj._id, taskDependency, setTaskDependency)}>Borrar</button>
        </div>
      )
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
        <header className="viewTasks-header">
          <h1 className="viewTasks-title">Tareas</h1>
          <button onClick={()=>setOpenCreate(true)}>Agregar</button>
        </header>
        <CreateTask userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency} openCreate={openCreate} setOpenCreate={setOpenCreate}/>
        <section>
          {tasks}
        </section>
      </main>
    </>
  )
}

export default ViewTasks;
