import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Forgetpassword from "../src/components/Forgetpassword";
import AddCourse from './components/Addcourse';
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
      <div className="main">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forget' element={<Forgetpassword />}></Route>
          <Route path='/addcourse' element={<AddCourse />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
