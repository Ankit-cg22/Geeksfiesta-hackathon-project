import React from 'react'
import './NoticeBoard.css'

import { noticeData } from './data/NoticeData'
import NoticeElement from './sub-components/NoticeElement'

export default function NoticeBoard() {

    return (
        <div className="notice-board-content">
            <h1 >Notice Board</h1>

            <div className="notice-area">
            
                {noticeData.map((notice) => {
                    return(
                        <NoticeElement id={notice.id}  notice={notice}/>
                    )
                })}

            </div>
        </div>
    )
}
