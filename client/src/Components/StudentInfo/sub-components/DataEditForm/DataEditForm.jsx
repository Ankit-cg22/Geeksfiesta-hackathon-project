import React from 'react'
import './DataEditForm.css'

export default function DataEditForm({student}) {
    return (
        <div className="data-edit-form">
            <form action="">
                <input type="text" name="name" placeholder="Name" defaultValue={student.name}/>
                <input type="text" name="studentId"  placeholder="Student ID" defaultValue={student.studentId}/>
                <input type="text" name="gender" placeholder="Gender" defaultValue={student.gender}/>
                <input type="number" name="age" placeholder="Age" defaultValue={student.age}/>
                <input type="text" name="achievements" placeholder="Achievements" defaultValue={student.achievements}/>
                <input type="text" name="linkToResume" placeholder="Link to resume" defaultValue={student.linkToResume}/>
                <button type="submit" className="submit-btn"> Save </button>
            </form>
        </div>
    )
}
