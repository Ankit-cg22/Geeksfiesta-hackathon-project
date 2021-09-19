import React , { useState , useReducer , useEffect} from 'react'
import './StudentInfo.css'

import StudentListItem from './sub-components/StudentListItem/StudentListItem'
import StudentDetails from './sub-components/StudentDetails/StudentDetails'

import DataEditForm from './sub-components/DataEditForm/DataEditForm'

// import { getStudentInfo } from '../../actions/actions'

const ACTIONS = {
    SHOW_INFO : "info"
}


function reducerShow(studentData , action ){
    switch(action.type)
    {
        case ACTIONS.SHOW_INFO :
            studentData = action.payload.studentInfo
            return studentData.filter( s => s.studentId === action.payload.studentId)        
        default : return studentData;
    }
}


export default function StudentInfo({currentUser}) {

    const [editForm, setEditForm] = useState(false)
    const [studentInfo , setStudentInfo] = useState([])
    const [studentDetails , dispatchShow]= useReducer( reducerShow , studentInfo);

    useEffect(() => {
        setStudentInfo(JSON.parse(localStorage.getItem('studentData')))
    }, [])

 
    const handleClick =(student) =>{
        dispatchShow( {
            type : ACTIONS.SHOW_INFO,
            payload : {studentId :student.studentId , studentInfo : studentInfo}
                })        
    }

  
    return (
        <div className="student-content">
            <div className="student-title">
                <h1> Student Info </h1>
            </div>
            {!editForm ?
            <div className="info-area">

               {studentInfo?.length > 0 ? 
                         <div className="student-list">
                         <h2 className="student-subHead">Student List</h2>
                         
                         {studentInfo.map((student) => {
                             return(
                                 <StudentListItem id = {student.id} student={student} handlClick={handleClick}/>
                             )
                         })
                         
                         }
     
                     </div>
                :
                    <div className="student-list">
                    <h2 className="student-subHead">Student List</h2>
                    
                         <p id="loading">Loading data ...</p>

                    </div>

               }

                <div className="student-details">
                    <h2 className="student-subHead">Student Details</h2>

                    <div className="student-card-holder">
                        
                            {studentDetails.length == 1 ?
                                <StudentDetails id= {studentDetails[0].id} student={studentDetails[0]} setEditForm={setEditForm} editForm={editForm} currentUser={currentUser} />
                            :
                                <p className="direction">Click on 'Details' button to view details of the student.</p>
                            }

                            
                    </div>
                    
                </div>

            </div>
            :
                     <div className="edit-form-holder">
                         <DataEditForm student={studentDetails[0]} studentInfo={studentInfo}/>
                     </div>
            }

        </div>
    )
}
