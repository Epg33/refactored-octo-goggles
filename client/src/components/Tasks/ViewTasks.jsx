import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask"

function ViewTasks() {
  //estados
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [taskDependency, setTaskDependency] = useState();
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  const {userId} = useContext(AuthContext)
  let userid = '63581cf82aff19b47488c5f9'
  //funcion para borrar una tarea especifica
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

  //funcion que muestra todas los tareas
  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return (
        <div className="task-container" key={obj._id}>
          <h3 className="task-title">{obj.title}</h3>
          <p className="task-description">{obj.description}</p>
          <p className="task-state">{obj.done ? "hecha" : "pendiente"}</p>
          <button className="task-update">Actualizar</button>
          <button className="task-delete" onClick={()=>deleteTask(obj._id, taskDependency, setTaskDependency)}>Borrar</button>
        </div>
      )
    }))
  }

  //Effect que llama todas las tareas del servidor
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
        <UpdateTask userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency} openUpdate={openUpdate} setOpenUpdate={setOpenUpdate}/>
        <CreateTask userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency} openCreate={openCreate} setOpenCreate={setOpenCreate}/>
        <section className="viewTasks-container">
          {tasks}
        </section>
      </main>
    </>
  )
}

export default ViewTasks;
