import React ,{useEffect , useState} from 'react'
import './NoticeBoard.css'

import { getNoticeData } from '../../actions/dataActions'
import NoticeElement from './sub-components/NoticeElement'

export default function NoticeBoard() {

    useEffect(() => {
        getNoticeData(setNoticeData)  
    }, [])

    const [noticeData , setNoticeData] = useState([])

    return (
        <div className="notice-board-content">
            <h1 >Notice Board</h1>

            {noticeData.length ?
                <div className="notice-area">
            
                {noticeData.map((notice) => {
                    return(
                        <NoticeElement id={notice.id}  notice={notice}/>
                    )
                })}

            </div>
            :
                <div className="notice-area">
            
                    <p id="loading"> Loading data ...   </p>

                </div>
        }
        </div>
    )
}
