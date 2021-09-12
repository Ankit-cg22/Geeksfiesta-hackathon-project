import React from 'react'
import './HomePage.css'

import DevSvg from '../svg/developer.svg'
import music1 from '../svg/music1.svg'
import music2 from '../svg/music2.svg'


export default function HomePage() {
    return (
        <div className="content">
           
            <div className="details">

                <div className="svgClass">

                    <img className="m1"  src={music1} alt="developer"/>
                    <img className="m2" src={music2} alt="developer"/>
                    <img className="svgImage" src={DevSvg} alt="developer"/>
                </div>

                <div className="description">
                    <div className="paragraph">
                        <h2>Welcome to CSE Branch</h2>
                        <p>This is the web site of Computer Science and Engineering branch of International 
                            Institue of Information Technology , Bhubaneswar. Here you can view the time table,
                            access the notice board and view details about your classmates.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
