import React from 'react'
import './Button.css'

export default function Button({name ,student, handleClick}) {
    return (
        <div>
            <button onClick={() => handleClick(student) }>{name}</button>
        </div>
    )
}
