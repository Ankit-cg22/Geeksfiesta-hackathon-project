import React , {useState} from 'react'
import './AuthForm.css'
import { signUp } from '../../../../actions/authActions';
import { signIn } from '../../../../actions/authActions';
import { useHistory } from 'react-router-dom';

const initialData = { name:'', email: '' , password: '' , confirmPassword: ''};

export default function AuthForm({setCurrentUser}) {

    const history = useHistory()
    
    const [isSignUp , setIsSignUp] = useState(false)
    const [authFormData, setAuthFormData] = useState(initialData)

    const handleSubmit =(e)=>{
        e.preventDefault()  
        {isSignUp ? signUp(authFormData , history , setCurrentUser) : signIn(authFormData , history , setCurrentUser)}
    }
    const handleChange = (e) => {
        setAuthFormData({  ...authFormData , [e.target.name]: e.target.value })
    }

    return (
        <div className="auth-card">
            
            <form onSubmit={handleSubmit}>

                { isSignUp && (
                    <input name="name" type="text" placeholder="Name" onChange={handleChange}/>
                )}

                <input name="email" type="email" placeholder="email" onChange={handleChange}/>

                <input name="password" type="password" placeholder="password" onChange={handleChange}/>

                { isSignUp && (
                    <input name="confirmPassword" type="password" placeholder="confirm password" onChange={handleChange}/>
                )}

                 <div className="switch-button">
                    <p>{isSignUp ?" Already have account ?" :" Do not have account ?"} </p>
                    <button type="button" onClick={() => setIsSignUp(!isSignUp)}> {isSignUp ?" Sign In" :" Sign Up "} </button>
                </div>

                <button type="submit" className="submit-btn"> {!isSignUp ?" Sign In" :" Sign Up "}</button>

            </form>

        </div>
    )
}
