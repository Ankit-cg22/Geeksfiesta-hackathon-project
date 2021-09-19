import React from 'react'
import './NoticeElement.css'

export default function NoticeElement({notice}) {
    return (
        <div className="notice-card">
            <h2>{notice.title}</h2>
            <h4>{notice.date}</h4>
            <p>{notice.description}</p>
        </div>
    )
}
