import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Forgetpassword from "../src/components/Forgetpassword";
import AddCourse from './components/Addcourse';
import Admin from './components/Admin';
import View_course from './components/View';
import Dashboard from './components/Dashboard';
import Sidebar from '../src/components/Sidebar'
function App() {
  return (
    <div className="App">
      <div className="main">
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forget' element={<Forgetpassword />}></Route>
          <Route path='/addcourse' element={<AddCourse />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/view_course' element={<View_course />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<Sidebar />}></Route>
          
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;