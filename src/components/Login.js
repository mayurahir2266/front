// import React from "react";
// import '../components/Css/Login.css';
// import { useState } from 'react';
import { Link } from "react-router-dom";



function Login() {
  
  
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
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
              <Link to="/admin" className='submit'>
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
