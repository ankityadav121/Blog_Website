import React, { useState } from 'react'
import axios from "axios"
import {useHistory} from 'react-router-dom';
const Signup = () => {

    const history = useHistory();
    const [user, setUser]=useState({
        name: "",
        email:"",
        password: "",
        reEnterPassword:""
    })
    const handleChange = e=>{
        
        const {name,value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }

     const signup=()=>{
         const {name, email, password , reEnterPassword} = user
         if(name && email && password && (password === reEnterPassword)){
            axios.post('http://localhost:9002/signup', user)
            .then(res=>{ alert(res.data.message)
                history.push("/login")
            }
               )
        }
        else{
            alert("invalid input")
        }

         }

         

    return (
        <div className='register'>
           
            <h1>Register</h1>
            <input type="text" name="name" value={user.name } id=""   onChange={handleChange} placeholder='Your Name'/>
            <input type="text" name="email" value= {user.email} placeholder='Your Email' onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder='Your password' onChange={handleChange}/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword } placeholder='Re-enter Password' onChange={handleChange}/>
            <div className="button" onClick={signup}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>history.push('/login')}>Login</div>
        </div>
    )
}

export default Signup
