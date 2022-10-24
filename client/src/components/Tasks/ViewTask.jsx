import React from "react";
import "../../styles/tasks/viewTask.css";
import { deleteTask } from "./deleteTask";

function ViewTask({userid,obj, taskDependency, setTaskDependency}) {
  const dell = () => {
    
      deleteTask(userid, obj.id, taskDependency, setTaskDependency)
      
  }
  return (
    <div key={obj._id}>
      <h3>{obj.title}</h3>
      <p>{obj.description}</p>
      <p>{obj.done ? "hecha" : "pendiente"}</p>
      <button onClick={dell/*deleteTask(userid, obj.id, taskDependency, setTaskDependency)*/}>Borrar</button>
    </div>
  );
}

export default ViewTask;
