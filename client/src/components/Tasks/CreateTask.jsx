import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/tasks/createTask.css";

function CreateTask({userid, taskDependency, setTaskDependency, openCreate, setOpenCreate}) {
  
  const regEx = new RegExp('[^A-Za-z]*[a-z]')
  const title = useRef()
  const description = useRef()
  const $ = (prop) => {return prop.current.value}

  const checkFormat = () => {
    if($(title).length <6){
      alert('El titulo debe tener al menos seis caracteres')
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
    })
    setTaskDependency(taskDependency ? false :true)
  }
  if(!openCreate){
    return null
  }
  else return (
    <>
      <div className="create-body">
        <label className="create-title-container">
          <input type="text" className="create-title-input" placeholder="Titulo" ref={title} required/>
        </label>
        <textarea ref={description} className="create-description" placeholder="Description" required></textarea>
        <button className="create-save" onClick={checkFormat}>Guardar</button>
      </div>
    </>
  );
}

export default CreateTask;
