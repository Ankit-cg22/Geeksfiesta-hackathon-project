import React ,{useEffect , useState} from 'react'
import './NoticeBoard.css'

import NoticeElement from './sub-components/NoticeElement/NoticeElement'

import EditForm from './sub-components/EditForm/EditForm'

export default function NoticeBoard(currentUser) {

    const [editForm ,setEditForm] = useState(false)

    console.log("ola");


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('noticeData'));
        setNoticeData(data?.reverse())
    }, [])


    const [noticeData , setNoticeData] = useState([])
    const [currentNotice , setCurrentNotice] = useState([])
    return (

        <div className="notice-board-content">
    
        <h1 >Notice Board</h1>

        {!editForm ?
           
                <div className="sub-content">

                    {currentUser?.currentUser?.classRep ?
                        <div className="add-button" onClick={() => setEditForm(true)}>
                            <p>Add new notice </p>
                        </div>
                    :
                        null    
                    }

                    {noticeData.length ?
                        <div className="notice-area">
                        <div class="fix"></div>
                        {noticeData.map((notice) => {
                            return(
                                <NoticeElement id={notice.id}  notice={notice} setEditForm={setEditForm} setCurrentNotice={setCurrentNotice} currentUser={currentUser} />
                            )
                        })}
                    </div>
                    :
                        <div className="notice-area">
                            <p id="loading"> Loading data ...   </p>
                        </div>
                        }
                </div>
               
    
            :
                <div className="sub-content">
                    
                    <EditForm notice ={currentNotice} setNoticeData={setNoticeData} noticeData={noticeData} setEditForm={setEditForm}/>
                    
                </div>
    }
</div>
    )
}
