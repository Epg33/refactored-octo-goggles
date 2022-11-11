import React, { useState, useEffect,/*, useContext*/ 
useRef} from "react";
// import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask"

function ViewTasks() {
  const title = useRef();
  //estados
  const [update, setUpdate] = useState(<></>)
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [taskDependency, setTaskDependency] = useState();
  const [taskId,setTaskId] = useState('');
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  // const {userId} = useContext(AuthContext)
  let userid = localStorage.getItem("theIdForTheUserThatIsLoggedInThisApp")
  // '63581cf82aff19b47488c5f9'
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

  const settingtheid = (id) => {
    setUpdate(<UpdateTask taskid={id} userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency} openUpdate={openUpdate} setOpenUpdate={setOpenUpdate}/>)
    window.localStorage.setItem('taksUpdateId', id)
  }

  const login = (i) => {
    setUpdate(function Update (){
      return(<>
      <div className="create-background"></div>
        <div className="create-body">
          <div className="modal">
            <div className="create-b">
              <h3 className="create-title">Crear Tarea</h3>
              <label className="create-title-container">
                <input type="text" className="create-title-input" placeholder="Titulo" id="title" ref={title} required/>
              </label>
              <textarea  className="create-description" placeholder="Description" required></textarea>
              <div className="create-buttons-container">
                <button className="create-cancel">Cancelar</button>
                <button className="create-save" onClick={console.log(i)}>Guardar</button>
            </div>
          </div>
        </div>
      </div></>
    )}
  )}
  //funcion que muestra todas los tareas
  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return (
        <div className="task-container" key={obj._id}>
          <h3 className="task-title">{obj.title}</h3>
          <p className="task-description">{obj.description}</p>
          <p className="task-state">{obj.done ? "hecha" : "pendiente"}</p>
          <button className="task-update" onClick={()=> {login(obj._id) /*setOpenUpdate(true); settingtheid(obj._id);*/}}>Actualizar</button>
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
        {update}
        <CreateTask userid={userid} setTaskDependency={setTaskDependency} taskDependency={taskDependency} openCreate={openCreate} setOpenCreate={setOpenCreate}/>
        <section className="viewTasks-container">
          {tasks}
        </section>
      </main>
    </>
  )
}

export default ViewTasks;
