import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";

function ViewTasks() {
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  let userid = '6351c3bb0ea8b08c9456cb88';

  const showTask = (taskprop) =>{
    console.log(taskprop.data);
    setTasks(taskprop.data.map(obj =>{
      return <div key={obj._id}>
        <h3>{obj.title}</h3>
        <p>{obj.description}</p>
        <p>{obj.done? 'hecha' : 'pendiente'}</p>
      </div>

    }))
  }

  useEffect(()=>{
    axios.get(`http://localhost:4000/task/${userid}`,{
        "token": token
    })
      .then(res=>showTask(res))
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
