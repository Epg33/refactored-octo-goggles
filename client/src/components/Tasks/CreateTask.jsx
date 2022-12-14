import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/tasks/createTask.css";

function CreateTask({userid, taskDependency, setTaskDependency, openCreate, setOpenCreate}) {
  
  const regEx = new RegExp('[^A-Za-z]*[a-z]')
  const title = useRef()
  const description = useRef()
  const $ = (prop) => {return prop.current.value}

  const checkFormat = () => {
    if($(title).length <4){
      alert('El titulo debe tener al menos cuatro caracteres')
    }
    else if(!regEx.test($(title))){
      alert('el titulo solo puede contener letras')
    }
    else {
      createTask();
    }
  }

  const createTask = () => {
    axios.post(`http://localhost:4000/task/${userid}`, {
      title: title.current.value,
      description: description.current.value,
      done: false,
      token: localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
    }).then(()=>setOpenCreate(false))
    setTaskDependency(taskDependency ? false :true)
  }
  if(!openCreate){
    return null
  }
  else return (
    <>
      <div className="create-background"></div>
      <div className="create-body">
        <div className="modal">
          <div className="create-b">
            <h3 className="create-title">Crear Tarea</h3>
            <label className="create-title-container">
              <input type="text" className="create-title-input" placeholder="Titulo" ref={title} required/>
            </label>
            <textarea ref={description} className="create-description" placeholder="Description" required></textarea>
            <div className="create-buttons-container">
              <button className="create-cancel" onClick={()=>setOpenCreate(false)}>Cancelar</button>
              <button className="create-save" onClick={checkFormat}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTask;
