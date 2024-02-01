// import React from "react";
import '../components/Css/Addcourse.css';
import React, { } from "react";
import '../components/Css/Login.css';




function View_course() {



    return (

        <>
        <div className='view'>

    <h3>===============   View Your Course Please   ===============</h3> <br />

    <table width="80%" align='center' className='container' >
        <thead>
            <tr>
                <th>Course Name</th> 
                <th>Course Fee</th>
                <th>Delete Course</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>design</td>
                <td>100000</td>
                <button className='delete'>delete</button>
            </tr>
            <tr>
                <td>flutter</td>
                <td>120000</td>
                <button className='delete'>delete</button>

            </tr>
            <tr>
                <td>full stack</td>
                <td>150000</td>
                <button className='delete'>delete</button>

            </tr>
            </tbody>
        </table>

        </div>
        </>
    )
}

export default View_course;