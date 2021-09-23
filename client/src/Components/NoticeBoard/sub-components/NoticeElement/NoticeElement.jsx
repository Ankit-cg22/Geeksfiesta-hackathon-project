import React from 'react'
import './NoticeElement.css'
import {useHistory} from "react-router-dom"

import { deleteNotice } from '../../../../actions/noticedata'

export default function NoticeElement({notice , setEditForm , setCurrentNotice , currentUser}) {

    const history= useHistory()

    const handleEdit=()=>{
        setCurrentNotice(notice)
        setEditForm(true)
    }

    const handleDelete=()=>{
        deleteNotice(notice._id , history)
    }


    return (
        <div className="notice-card">
            <h2>{notice.title}</h2>
            <h4>{notice.date}</h4>
            <p>{notice.description}</p>

            {currentUser?.currentUser?.classRep  && (<div className="notice-buttons">
                <button id="edit-button" onClick={handleEdit}>Edit</button>
                <button id="edit-button" onClick={handleDelete}>Delete</button>
            </div>)}
        </div>
    )
}
