import React , {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const Login = ({setLoginUser}) => {
    const history = useHistory();
    const [user, setUser]=useState({
        email:"",
        password: "",
    })
    const handleChange = e =>{
        
        const {name,value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login=()=>{
        axios.post("http://localhost:9002/login", user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
        history.push("/")
        })
    }

    return (
        <div className='login'>
            
        <h1>Login</h1>
        <input type="text"  name="email" value={user.email } id=""   onChange={handleChange} placeholder="Enter your email" />
        <input type="password" name="password" value={user.password } id=""   onChange={handleChange} placeholder='Enter your Password' />
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" onClick={()=>history.push('/signup')}>Register</div>
        
        </div>
    )
}

export default Login
