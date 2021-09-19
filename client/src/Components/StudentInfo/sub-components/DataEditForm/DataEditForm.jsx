import React,{useState} from 'react'
import './DataEditForm.css'
import { updateStudentData } from '../../../../actions/dataActions'
import {useHistory} from "react-router-dom"

export default function DataEditForm({student ,studentInfo }) {

    const history = useHistory();
    
    const [editFormData, setEditFormData] = useState(student)

   const handleChange = (e) => {
        setEditFormData({  ...editFormData , [e.target.name]: e.target.value })
    }

    const handleSubmit  = (e) => {
        e.preventDefault()      
        updateStudentData(student._id , editFormData, studentInfo ,history)
        
    }   

    return (
        <div className="data-edit-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" defaultValue={student.name} onChange={handleChange}/>
                <input type="text" name="studentId"  placeholder="Student ID" defaultValue={student.studentId} onChange={handleChange}/>
                <input type="text" name="gender" placeholder="Gender" defaultValue={student.gender} onChange={handleChange}/>
                <input type="number" name="age" placeholder="Age" defaultValue={student.age} onChange={handleChange}/>
                <input type="text" name="achievements" placeholder="Achievements" defaultValue={student.achievements} onChange={handleChange}/>
                <input type="text" name="linkToResume" placeholder="Link to resume" defaultValue={student.linkToResume} onChange={handleChange}/>
                <button type="submit" className="submit-btn"> Save </button>
            </form>
        </div>
    )
}
