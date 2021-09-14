import React, { useState } from 'react'
import './StudentDetails.css'

export default function StudentDetails({ student , setEditForm ,editForm }) {



    return (
       
            <div className="student-card">
                <h2>{student.name}</h2>
                <div className="sub-details">
                    <p>ID : {student.studentId}</p>
                    <p>Gender : {student.gender}</p>
                    <p>Age : {student.age}   </p>
                    <p>Achievements : {student.achievements}</p>
                    <p>Resume: {student.linkToResume}</p>
                   
                    <button onClick={() => setEditForm(!editForm)}> Edit </button>
                </div>
        
            </div>

            
    )
}
