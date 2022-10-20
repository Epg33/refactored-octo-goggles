import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";

function ViewTasks() {
  const [tasks, setTasks] = useState(<></>)
  useEffect(()=>{
    axios.get()
  }, [])
  return( 
    <>
      <Nav />
      <main className="viewTasks-body">
        <h1>Tareas</h1>
        <section>
          {tasks}
        </section>
      </main>
    </>
  )
}

export default ViewTasks;
