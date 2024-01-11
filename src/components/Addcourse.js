// import React from "react";
import '../components/Css/Addcourse.css';
import React, {} from "react";
import { Link } from "react-router-dom";




function Add_course() {

 
 
  return (

    <>
     
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add Course</h3>
            
            <div className="form-group mt-3">
              <label>Add course name</label>
              <input
                type="email"
                className="form-control mt-1" 
                placeholder="text your course"
              />
            </div>
            
            <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              
              <Link to="/home" className='submit'>Submit</Link>
              
                 
                </button>
            </div>
            
          </div>
        </form>
      </div>
    </>
  )
}

export default Add_course;
