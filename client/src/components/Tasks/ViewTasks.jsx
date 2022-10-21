import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";

function ViewTasks() {
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  let userid = '6351c3bb0ea8b08c9456cb88';
  useEffect(()=>{
    axios.get(`http://localhost:4000/task/${userid}`,{
        "token": token
    })
      .then(res=>console.log(res))
      
    // axios({
    //     method: 'get',
    //     url: `http://localhost:4000/task/${userid}`,
    //     data: {"token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzM1ZThkNjFkMWRiODU0Y2U0ODllOCIsImVtYWlsIjoiYWxlQGdtYWlsLmNvbSIsImlhdCI6MTY2NDM5ODU0MH0.CgRKPDTwDMXwc46CmakbrW5kVAdcLSc5-Ga-XLhq0e0'}
    // })
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
