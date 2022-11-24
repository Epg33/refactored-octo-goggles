// import { useContext } from "react";
import { BrowserRouter, Routes, Route, /*Navigate*/ } from "react-router-dom";
import {/*AuthContext*/ AuthContextProvider as Context} from "./components/context/AuthContext";
import Home from "./components/Home/Index";
import Register from "./components/Register/Index";
import Login from "./components/Login/Index";
import ViewTasks from "./components/Tasks/ViewTasks";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/account/tasks" element={<ViewTasks />}></Route>
            <Route path="*" element={<Error404 />}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
