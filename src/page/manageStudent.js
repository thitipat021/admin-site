import React, { useState } from 'react';
import Navbar from '../component/navbar';
import AddStudent from '../component/addStudent';

function ManageStd() {
        const [student, setStudent] = useState({firstName: '', lastName: ''})
        const addStudent=(e)=>{
            console.log("student added");
        }

        return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <AddStudent/>
                </div>
            </div>
        </div>
        );  
}
export default ManageStd;