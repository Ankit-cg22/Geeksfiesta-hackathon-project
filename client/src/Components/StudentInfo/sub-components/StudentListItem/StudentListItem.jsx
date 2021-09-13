import React from 'react'
import './StudentListItem.css'
import Button from '../../../Button/Button'

export default function StudentListItem({student , handlClick}) {
    return (
        <div className="student-list-item">
            <h4>{student.name}</h4>
            <Button id={student.id} className ="btn" name="Details" student={student} handleClick={handlClick}/>
        </div>
    )
}
