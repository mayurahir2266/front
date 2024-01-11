import { Link } from 'react-router-dom';
import './Css/Home.css';
import React from 'react';



function Home() {
    return (
        <>
        
             <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register Now</h3>
          <div className="form-group mt-3">
            <label>Enter Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter your name"
            />
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
          <div className="form-group mt-3">
            <label>Re-Enter Password</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Re-Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              
            <Link to="/login" className='submit'>Submit</Link>
             
            </button>
          </div>
          <div>
          <span>Already you have an account &nbsp;  
            <Link to="/login">login</Link>
            </span>
            </div>
         
        </div>
      </form>
    </div>

    
        </>
    )
}

export default Home;