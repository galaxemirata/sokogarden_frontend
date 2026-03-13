import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


const SignUp = () => {

   // initialize our hooks

    const[username,setUsername]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const[password,setPassword]=useState()


    const[loading,setLoading]=useState()
    const[success,setSuccess]=useState()
    const[error,setError]=useState()

    
    // create a function that will send our data to the backend

    const submit=async(e)=>{
      e.preventDefault()
      setLoading("Please wait as we upload your data")
      
       try {

        const data=new FormData()
        data.append("username",username)
        data.append("email",email)
        data.append("password",password)
        data.append("phone",phone)
        
        // call the api to send this data to the database

        const response=await axios.post("http://collins.alwaysdata.net/api/signup",data)

        setLoading("")

        setSuccess(response.data.message)


        // reset the form after sending data

        setUsername("")
        setEmail("")
        setPassword("")
        setPhone("")

        
       } catch (error) {
        
        
        setLoading("")
        setError(error.message)
        
        
       }










    }



  return (

   
    <div className='row justify-content-center'> 


     <div className='col-md-6 card shadow'>
      <h1>SignUp</h1>
      <form action="" onSubmit={submit}>

        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>

        {username}

        <input type="text" placeholder=' Enter your username' className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <br />
        <input type="email" placeholder='Enter email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <input type="tel" placeholder='Enter your phone number' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <br />
        <input type="password" placeholder='Enter your password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <input type="submit" value="SignUp" className='btn bg-success text-white w-100'/>
        <br />
        <p>Already have an account <Link to='/signin'>Sign In</Link></p>








      </form>

     </div>
        
    </div>
  )
}

export default SignUp