import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import "../../styles/tasks/viewTasks.css";

function ViewTasks() {
  const [tasks, setTasks] = useState(<></>)
  const token = localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  let userid = '6351c3bb0ea8b08c9456cb88';
  useEffect(()=>{
    // axios.get(`http://localhost:4000/task/${userid}`,{
    //     "token": token
    // })
    //   .then(res=>console.log(res))
    axios({
        method: 'get',
        url: `http://localhost:4000/task/${userid}`,
        headers: {}, 
        body: token/*{
          token: token, // This is the body part
        }*/
    })
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
