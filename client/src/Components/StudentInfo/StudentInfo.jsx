import React , {useReducer} from 'react'
import './StudentInfo.css'

import {studentInfo} from './data/student-data'
import StudentListItem from './sub-components/StudentListItem/StudentListItem'
import StudentDetails from './sub-components/StudentDetails/StudentDetails'

const ACTIONS = {
    SHOW_INFO : "info"
}


function reducerShow(studentData , action ){
    switch(action.type)
    {
        case ACTIONS.SHOW_INFO :
            studentData = action.payload.studentInfo
            return studentData.filter( s => s.id === action.payload.id)        
        default : return studentData;
    }
}


export default function StudentInfo() {

    const [studentDetails , dispatchShow]= useReducer( reducerShow , studentInfo);

    const handleClick =(student) =>{
        dispatchShow( {
            type : ACTIONS.SHOW_INFO,
            payload : {id :student.id , studentInfo : studentInfo}
            })
        
    }


    return (
        <div className="student-content">
            <div className="student-title">
                <h1> Student Info </h1>
            </div>

            <div className="info-area">

                <div className="student-list">
                    <h2 className="student-subHead">Student List</h2>
                    
                    {studentInfo.map((student) => {
                        return(
                            <StudentListItem id = {student.id} student={student} handlClick={handleClick}/>
                        )
                    })
                    
                    }

                </div>

                <div className="student-details">
                    <h2 className="student-subHead">Student Details</h2>

                    <div className="student-card-holder">
                        <div className="student-card">
                            {studentDetails.length == 1 ?
                                <StudentDetails id= {studentDetails[0].id} student={studentDetails[0]}/>
                            :
                                <p>Click on 'Details' button to view details of the student.</p>
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
