import React from "react";
import Card from 'react-bootstrap/Card';
import '../components/Css/Dashboard.css';
import { Link } from "react-router-dom";

// import { Button } from 'react-bootstrap'

function Dashbord() {
    return (
        <>
            <div className='dashcol'>
                <div className='d-flex dashpad space m-3'>
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className='ms-auto pe-3'>
                        <Link className='ps-3 btn btn-primary text-white' to="/login">Log In</Link>
                    </div>
                    <div>
                        <Link className='ps-3 btn btn-primary text-white' to="/signup">Sign Up</Link>
                    </div>
                </div>
                <div className='dashpad d-flex gap-3 pr-2 m-3 '>

                    {/* -------------------- card 1 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol1 cardtxtcol'>
                        <Card.Body className='main-card'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>99</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                New orders
                            </Card.Text>
                            <Card.Link className='link' href='/home'>More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 2 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol2 cardtxtcol'>
                        <Card.Body className='main-card1'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>50%</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                Bounce Rate
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 3 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol3'>
                        <Card.Body className='main-card2'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>40</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                User Registrations
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 4 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol4 cardtxtcol'>
                        <Card.Body className='main-card3'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>60</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                Unique Visitors
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
export default Dashbord;