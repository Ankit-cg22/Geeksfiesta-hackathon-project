import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return (
        <div class="main">
            <div className="title">
                <h1><a href="/">CSE : IIIT-Bh </a> </h1>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="/notice-board" >Notice Board</a></li>
                </ul>
                <ul>
                    <li><a href="/timetable">Timetable</a></li>
                </ul>
                <ul>
                    <li><a href="/student-info">Student Info</a></li>
                </ul>
                <ul>
                    <li><a href="/auth">Log In</a></li>
                </ul>
                
            </div>
        </div>
    )
}
