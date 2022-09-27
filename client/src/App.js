import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/index'
import Register from './components/Register/index'
import Login from './components/Login/index'
import ViewTasks from './components/Tasks/ViewTasks'
import Error404 from './components/Error404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/account/tasks' element={<ViewTasks />}></Route>
          <Route path='*' element={<Error404 />}></Route>
          <Route ></Route>
          <Route ></Route>
          <Route ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
