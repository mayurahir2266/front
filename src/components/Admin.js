import '../components/Css/Login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function Admin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="photo">
        <div className='colo'>
          <Button className='switch' variant="secondary" onClick={handleShow}>
            Launch 
          </Button>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <div className='canvas'>
          <Offcanvas.Title>
            <img className='image' src={require(`../image/i.webp`)}></img>
          </Offcanvas.Title>
          <Offcanvas.Body>
            <div className='main-batan'>
              <button type="submit" className="batan btn btn-primary">
                <Link to="/addcourse" className='submit'>
                  Add_course
                </Link>
              </button> <br></br> <br></br>
              <button type="submit" className="batan btn btn-primary">
                <Link to="/View_course" className='submit'>
                  View_course
                </Link>
              </button>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>

    </>
  )
}
export default Admin;