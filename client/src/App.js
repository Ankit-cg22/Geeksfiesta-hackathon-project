import React , {useState , useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar'

import Timetable from './Components/Timetable/Timetable'
import Auth from './Components/Auth/Auth'
import HomePage from './Components/HomePage/HomePage'
import NoticeBoard from './Components/NoticeBoard/NoticeBoard'
import StudentInfo from './Components/StudentInfo/StudentInfo'

import { getStudentData } from './actions/dataActions'

export default function App() {

  const [currentUser , setCurrentUser] = useState("")

  useEffect(() => {

    getStudentData();

    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
  }, [])
  

  
  return (
    <div>
        <NavBar currentUser={currentUser?.result}/>

        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>  

            <Route exact path='/notice-board'>
               <NoticeBoard />
            </Route>  

            <Route exact path='/timetable'>
                <Timetable/>
            </Route>  

            <Route exact path='/student-info'>
                <StudentInfo currentUser={currentUser?.result}/>
            </Route> 

            <Route exact path='/auth'>
                <Auth setCurrentUser={setCurrentUser} />
            </Route>  
          </Switch>
        </Router>

    </div>
  )
}
