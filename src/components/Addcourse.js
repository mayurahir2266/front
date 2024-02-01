import '../components/Css/Addcourse.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';


function Add_course() {

  let [c_name, setc_name] = useState('');
  let [content_id, setcontent_id] = useState('');

  const btnhandler = () => {
    axios.post('http://localhost:5000/addcourse', {

      c_name: c_name,
      content_id: content_id
      
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
                  onChange={(e) => { setcontent_id(e.target.value) }}
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