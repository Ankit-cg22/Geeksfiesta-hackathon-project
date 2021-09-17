import React  from 'react'
import './NavBar.css'

export default function NavBar({currentUser , setCurrentUser}) {
    
  
    const handleLogOut = () => {
        localStorage.clear()
        setCurrentUser('')
    }

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
                {currentUser &&(
                    <ul>
                        <li id="logOut" onClick={() => handleLogOut() }><a href="">Log Out</a></li>
                    </ul>
                )}

                {currentUser &&(
                    <ul>
                        <li id="nav-user">{currentUser.name.split(' ')[0]}</li>
                    </ul>
                )}  
                
                {!currentUser && (
                    <ul>
                        <li><a href="/auth">Log In</a></li>
                     </ul>
                )}

                
                
            </div>
        </div>
    )
}
