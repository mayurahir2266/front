import { Link, useNavigate } from 'react-router-dom';
import './Css/Home.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';



function Home() {

  const Navigate = useNavigate('');


  let [name, setname] = useState('');
  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [conformpassword, setconformpassword] = useState('');
  let [error, setError] = useState('');

  const btnhandler = () => {
    axios.post('http://localhost:5000/register', {
      name: name,
      email: email,
      password: password,
      conformpassword: conformpassword,
      error: error
    })

      .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.data.status === "success") {
          Navigate("/login")
        }

        else {
          setError(response.data.status);
          // alert("please enter you data");
        }

        if (response.data.status === " ") {
          // setError(response.data.status);
          alert("please enter you data");
        }

        if (response.data.status === "check your email") {
          setError(response.data.status);
          alert("check your password");
        }

        if (response.data.status === "check your password") {
          setError(response.data.status);
          alert("check your password");
        }  

        if (response.data.status === "user already registered") {
          alert("user not found");
        }

      })

      .catch(function (error) {
        console.log(error);
      })

  }

  return (
    <>
      
        <div className="Auth-form-container ">
          <form className="Auth-form ">
            <div className="Auth-form-content ">
              <h3 className="Auth-form-title">Register Now</h3>
              <div className="form-group mt-3">
                <label>Enter Name</label>
                <input
                  type="name"
                  onChange={(e) => { setname(e.target.value) }}
                  className="form-control mt-1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  onChange={(e) => { setemail(e.target.value) }}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => { setpassword(e.target.value) }}
                />
              </div>
              <div className="form-group mt-3">
                <label>Re-Enter Password</label>
                <input
                  type="password"
                  onChange={(e) => { setconformpassword(e.target.value) }}
                  className="form-control mt-1"
                  placeholder="Re-Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >

                  <Link to="/login" onClick={btnhandler} className='submit'>Submit</Link>

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