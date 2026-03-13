import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  
  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()


  const navigate=useNavigate();


  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")

    
    



    try {
      
      const data=new FormData()
      data.append("email",email)
      data.append("password",password)

      const response=await axios.post("http://collins.alwaysdata.net/api/signin",data)
      console.log(response)

     

      setLoading("")
      // check if response has user item
    if (response.data.user){
      // if the user is found, store user details in localstorage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setSuccess(response.data.message)

      // Redirect to /getproducts component

      setTimeout(()=>{
        navigate("/");
      },2000)


    }

    else{
      // User not found, show error message

      setError(response.data.message)

    }

      


      
    } catch (error) {
      setLoading("")
      setError(error.data.message)
    }
  }

  


  



  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow'>
        <h1>Sign In</h1>
        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          {email}
          

          <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />
          {password}
          <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <br />
          <input type="submit" value="Sign In" className='form-control bg-success'/>
          <br />
          <p>Don't have an account?<Link to='/signup'>Sign Up</Link></p>
          





        </form>

      </div>
        
    </div>
  )
}

export default SignIn