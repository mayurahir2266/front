import '../components/Css/Login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function Admin(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div className='colo'>
            <Button className='switch' variant="secondary" onClick={handleShow}>
        Launch
      </Button>
      </div>
        
      <Offcanvas show={show} onHide={handleClose}>
      <div className='canvas'>
          <Offcanvas.Title>
            <img src={require(`../image/i.webp`)}></img>
          </Offcanvas.Title>
        <Offcanvas.Body>
        <button type="submit" className="batan btn btn-primary">
              <Link to="/addcourse" className='submit'>
                Add_course
                </Link>
              </button>
        </Offcanvas.Body>
      </div>
      </Offcanvas>
      
        </>
    )
}
export default Admin;
