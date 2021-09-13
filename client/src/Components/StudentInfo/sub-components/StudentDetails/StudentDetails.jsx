import React from 'react'
import './StudentDetails.css'

export default function StudentDetails({student}) {
    return (
        <div className="student-details-card">
            <h2>{student.name}</h2>
            <div className="sub-details">
                <p>ID : {student.studentId}</p>
                <p>Gender : {student.gender}</p>
                <p>Age : {student.age}   </p>
            </div>
        </div>  
    )
}
