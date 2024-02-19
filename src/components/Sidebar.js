import '../components/Css/Sidebar.css';
import React, { useState } from 'react'
import { Form, Button, Collapse } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";
import { FaTachometerAlt, FaChartPie, FaFile } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiTable } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false); 
    const [open2, setOpen2] = useState(false);
    // const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <>
            <Dashboard />
            <div className='sidebar_scroll '>
                <ul className='bgcolorsidebar list-unstyled'>
                    {/* ------------Logo-------------- */}
                    <li className='border-bottom pt-2 pb-2'>
                        <img src={require('../image/AdminLTELogo.png')} width='30px' /><span> <Link to='/dashboard'>AdminLTE 3</Link></span>
                    </li>
                    {/* ------------Logo 2------------- */}
                    <li className='border-bottom pt-3 pb-3'>
                        <img className='rounded-circle' src={require('../image/user2.jpg')} width='30px' /><span>Alexander Pierce</span>
                    </li>
                    {/* ------------search------------- */}
                    <li className='p-2'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search outline-secondary"
                                placeholder="Search"
                                className=""
                                aria-label="Search"

                            />
                            <Button className='bg-dark'><AiOutlineSearch className='text-white fs-4 fw-bold '></AiOutlineSearch></Button>
                        </Form>
                    </li>
                    {/* ------------Dashboard------------- */}


                    <li>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls='example-collapse-text'
                            aria-expanded={open} className='text-start btn1' >

                            <span className=''><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Dashboard <MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/login'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v1</Link></li>
                                <li><Link to='/login'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v2</Link></li>
                                <li><Link to='/login'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v3</Link></li>
                            </ul>
                        </Collapse>
                    </li>
                    {/* ------------Widgets------------- */}
                    <li className='list-unstyled text-start'>
                        <Button
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open} className='text-start colorlayout btn1' >

                            <span className='outline-light'><BsFillGrid3X3GapFill className='me-3 fs-5'></BsFillGrid3X3GapFill>Widgets</span>
                        </Button>

                    </li>

                    <li>
                        <Button
                            onClick={() => setOpen2(!open2)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open2} className='text-start colorlayout btn1' >

                            <span className=''><FaChartPie className='me-3 fs-5' ></FaChartPie>Charts<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open2}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>Chart JS</Link></li>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>Flot</Link></li>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>Inline</Link></li>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>uPlot</Link></li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Button
                            onClick={() => setOpen4(!open4)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open4} className='text-start colorlayout btn1' >

                            <span className=''><FaFile className='me-3 fs-5'></FaFile>Forms<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open4}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/addcourse'><BsCircle className='me-3 fs-6'></BsCircle>Add Course</Link></li>
                                <li><Link to='/view_course'><BsCircle className='me-3 fs-6'></BsCircle>View Course</Link></li>
                                <li><Link to='/Admission'><BsCircle className='me-3 fs-6'></BsCircle>Admission</Link></li>
                                <li><Link to='validation'><BsCircle className='me-3 fs-6'></BsCircle>Validation</Link></li>
                            </ul>
                        </Collapse>
                    </li>
                    {/* ------------tables------------- */}
                    <li>
                        <Button
                            onClick={() => setOpen5(!open5)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open5} className='text-start colorlayout btn1' >

                            <span className='outline-light'><HiTable className='me-3 fs-5' ></HiTable>Tables<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open5}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>Simple Tables</Link></li>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>DataTables</Link></li>
                                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>jsGrid</Link></li>
                            </ul>
                        </Collapse>
                    </li>



                </ul>
            </div>
        </>
    )
}
export default Sidebar;