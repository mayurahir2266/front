import { useState } from 'react';
import '../components/Css/Forget.css';
import { Link } from 'react-router-dom';

function Forgetpassword() {

  let [authmode, setauthmode] = useState("otp")

  const changeAuthMode = () => {
    setauthmode(authmode === "otp" ? "c_otp" : "otp")
    if (authmode === "c_otp") {
      setauthmode(authmode === "c_otp" ? "new-otp" : "otp")
    }
  }

    console.log(authmode);
    if(authmode === "otp") {

  return (
    <>
    <div className='card1'>
      <div class="card text-center" className='card' >
        <div class="card-header h5 text-white bg-primary">Forget Password </div>
        <div class="card-body px-5">
          <p class="card-text py-2">
          </p>
          <div class="form-outline">
            <label class="form-label" for="typeEmail">Enter Your Email Address </label>
            <input type="email" id="typeEmail" placeholder='Enter your email' class="form-control my-3" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={changeAuthMode} >
              
            Submit
             
            </button>
          <div class="d-flex justify-content-between mt-4">
            <a class="l1" href="#">Login</a>
            <a class="l1" href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


if(authmode === "new-otp") {
  return(
    <>
      <div className='card1'>
      <div className="card text-center"  >
        <div className="card-header h5 text-white bg-primary">Chage Password</div>
        <div className="card-body px-5">
          <p className="card-text py-2">
          </p>
          <div className="form-outline">
            <label className="form-label" for="typeEmail">Enter New Password </label>
            <input type="password" placeholder='Enter New Password' className="form-control my-3" />
          </div>
          <div className="form-outline">
            <label className="form-label" for="typeEmail">Enter Repeat Password </label>
            <input type="password"  placeholder='Enter Repeat Password' className="form-control my-3" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={changeAuthMode} >
              
          <Link to="/login" className='submit'>Submit</Link>
          {/* <Link to="/login" className='submit'>Submit</Link> */}
             
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

return(
  <>
      <div className='card1'>
      <div class="card text-center" className='card' >
        <div class="card-header h5 text-white bg-primary">Enter Otp</div>
        <div class="card-body px-5">
          <p class="card-text py-2">
          </p>
          <div class="form-outline">
            <label class="form-label" for="typeEmail">Conform Otp </label>
            <input type="email" id="typeEmail" placeholder='Enter Otp' class="form-control my-3" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={changeAuthMode} >
              
            Submit
             
            </button>
          
        </div>
      </div>
    </div>
  </>
)
}


export default Forgetpassword;