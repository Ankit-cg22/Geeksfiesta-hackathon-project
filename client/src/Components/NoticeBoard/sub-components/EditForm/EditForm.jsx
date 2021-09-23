import React,{useState} from 'react'
import './EditForm.css'

import {useHistory} from "react-router-dom"

import { updateNotice, createNotice } from '../../../../actions/noticedata'

const initialState = {title : "" , date:"" , description:""}

export default function EditForm({notice ,noticeData,setNoticeData ,setEditForm}) {

    const history = useHistory();

    const initialValue = notice ? notice : initialState

    const newNotice = notice.title ? 0 :  1;
    
    const [editFormData, setEditFormData] = useState(initialValue)

   const handleChange = (e) => {
        setEditFormData({  ...editFormData , [e.target.name]: e.target.value })
    }

    const handleSubmit  = (e) => {
        e.preventDefault()      
        
        
        {newNotice ? createNotice(editFormData ,noticeData,setNoticeData ,history) : updateNotice(notice._id , editFormData , noticeData ,history)}
    }   

   

    return (
        <div className="notice-data-edit-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" defaultValue={notice?.title} onChange={handleChange}/>
                <input type="text" name="date"  placeholder="Date"  defaultValue={notice?.date} onChange={handleChange}/>
                <input type="text" name="description" placeholder="Description" defaultValue={notice?.description} onChange={handleChange}/>
                <button type="submit" className="submit-btn"> Save </button>
            </form>
        </div>
    )
}
