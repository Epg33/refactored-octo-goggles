import axios from "axios"

export  const deleteTask = (userid,id, taskDependency, setTaskDependency) => {
  axios.delete(`http://localhost:4000/task/${userid}/${id}`, {
    token: localStorage.getItem('AuthTokenForLoginInThisSpecificApp')
  })
  .then(()=>{setTaskDependency(taskDependency? false :true)})
}