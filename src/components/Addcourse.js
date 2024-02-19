import '../components/Css/Addcourse.css';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';


function Add_course() {

  let [c_name, setc_name] = useState('');
  let [course_fee, setcourse_fee] = useState('');
  let [error, setError] = useState('');

  const btnhandler = () => {
    axios.post('http://localhost:5000/course/addcourse', {
      c_name: c_name,
      course_fee: course_fee,
      error: error    
    }) .then(function (response) {
        // handle success
        console.log(response);

        if (response.data.status === "succesfully added") {
          Navigate("/")
        }
    
        else {
          setError(response.data.status);
          // alert("please enter your course");
        }
    
        if (response.data.status === " ") {
          setError(response.data);
          alert("please enter your course and fees");
        }
    
        // if (response.data.status === "check your data") {
        //   setError(response.data.status);
        //   alert("check your data");
        // }
    
        // if (response.data.status === "check your data") {
        //   setError(response.data.status);
        //   alert("check your data");
        // } 
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (

    <>
      <div className='add'>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">

              <h3 className="Auth-form-title">Add Course</h3>

              <div className="form-group mt-3">
                <label>Add course name</label>
                <input
                  type="email"
                  onChange={(e) => { setc_name(e.target.value) }}
                  className="form-control mt-1"
                  placeholder="text your course"
                />
              </div>
              
              <div className="form-group mt-3">
                <label>Course Fee</label>
                <input
                  type="integer"
                  onChange={(e) => { setcourse_fee(e.target.value) }}
                  className="form-control mt-1"
                  placeholder="Enter Course Fee"
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >
                  <Link to="/" onClick={btnhandler} className='submit'>Submit</Link>
                </button>


              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add_course;