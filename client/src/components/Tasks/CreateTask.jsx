import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/tasks/createTask.css";

function CreateTask() {
  const done = useRef()
  console.log(done);

  const check = () => {
    
    console.log(done);

    if (done.checked){
      done.checked =  false
    }
    else {
      done.checked = true
    }
  }
  return (
    <>
      <div>
        <label>
          <input type="text" />
        </label>
        <textarea></textarea>
        <input type="checkbox" ref={done} defaultChecked={false} onClick={check}/>
        <button>Guardar</button>
      </div>
    </>
  );
}

export default CreateTask;
