import React from 'react'
import './Timetable.css'

export default function Timetable() {
    return (
        <div className = "content">
            <h1>Time table</h1>

            <table>
                
                <tr>
                    <th>Day/Time</th>
                    <th>10:00-11:05</th>
                    <th>11:05-12:10</th>
                    <th>12:15-13:15</th>
                    <th className="lunch">Lunch Break</th>
                    <th>14:00-15:00</th>
                    <th>15:00-16:00</th>
                </tr>

                <tr>
                    <td>Monday</td>
                    <td></td>
                    <td>IPROG-2</td>
                    <td>IPROG-2</td>
                    <td className="lunch"></td>
                    <td>P and S</td>
                    <td>DEC</td>
                </tr>

                <tr>
                    <td>Tuesday</td>
                    <td>P and S</td>
                    <td>NT</td>
                    <td>DEC</td>
                    <td className="lunch"></td>
                    <td>IPROG-2</td>
                    <td>IPROG-2</td>
                </tr>

                <tr>
                    <td>Wednesday</td>
                    <td>DEC</td>
                    <td>SPE</td>
                    <td></td>
                    <td className="lunch"></td>
                    <td>DEC LAB</td>
                    <td>DEC LAB</td>
                </tr>

                <tr>
                    <td>Thursday</td>
                    <td>NT</td> 
                    <td>DEC</td>
                    <td>SPE</td>
                    <td className="lunch"></td>
                    <td>IPROG-2 LAB</td>
                    <td>IPROG-2 LAB</td>
                </tr>

                <tr>
                    <td>Friday</td>
                    <td>P and s</td>
                    <td>NT</td>
                    <td>SPE</td>
                    <td className="lunch"></td>
                    <td>CS-3</td>
                    <td>CS-3</td>
                </tr>

            </table>

        </div>
    )
}
