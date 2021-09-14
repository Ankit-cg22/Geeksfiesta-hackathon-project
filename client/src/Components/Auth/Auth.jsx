import React from 'react'
import './Auth.css'

import AuthForm from './sub-components/AuthForm/AuthForm'

export default function Auth() {
    return (
        <div className="content">
            <h1 className="auth-head">Sign In/ Sign up</h1>
            <div className="auth-content">
                <AuthForm/>
            </div>
        </div>
    )
}
