import React from 'react'
import '../../styles/tasks/updateTask.css' 

function UpdateTask({taskId, userid, taskDependency, setTaskDependency, openUpdate, setOpenUpdate}) {
  // if(!openUpdate){
  //   return null;
  // }
  const id = window.localStorage.getItem('taskId')
  console.log(id, taskId);
  return (
    <div>xddd</div>
  )
}

export default UpdateTask