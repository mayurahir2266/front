// import React from "react";
// import '../components/Css/Login.css';
// import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';



function Login() {
  
  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');

  const btnhandler = () => {
    axios.post('http://localhost:5000/login',{
      
      email: email,
      password: password
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  
  
    return (
      <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                onChange={(e)=>{setemail(e.target.value)}}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                onChange={(e)=>{setpassword(e.target.value)}}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
              <Link to="/admin" onClick={btnhandler} className='submit'>
                Submit
                </Link>
              </button>
             
            </div>
            <p className="text-center mt-2">
              Forgot <a href=""><Link to="/forget">password?</Link></a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
    }
  
 
  

export default Login;