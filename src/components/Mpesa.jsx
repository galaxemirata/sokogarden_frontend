import React from 'react'
import { useLocation,} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Mpesa = () => {

  const[loading,setLoading]=useState()
  const[error,setError]=useState()
  const[success,setSuccess]=useState()
  const[phone,setPhone]=useState()

  const submit=async(e)=>{

    setLoading("Please wait....")
    e.preventDefault()
    try {
      const data=new FormData()
      data.append("amount",product.product_cost)
      data.append("phone",phone)

      const response=await axios.post("http://collins.alwaysdata.net/api/mpesa_payment",data)
      console.log("The response is",response )
      setLoading("")
      setSuccess(response.data.message)
      
    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  }

  const{product}=useLocation().state || {}
  return (
    <div className=' row justify-content-center'>
        <h3>Make Payments -Lipa na Mpesa</h3>
        <p className='text-success'>{product.product_name}</p>
        <p className='text-warning'>{product.product_cost}</p>
        <p>{loading}</p>
        <p>{success}</p>
        <p>{error}</p>
        

      <div className='col-md-6'>
      <form action="" onSubmit={submit}>

          <input type="tel" placeholder='Enter your phone number starting with 254' className='form-control' value={phone} onChange={(e)=>setPhone(error.target.value)}/>
          <br />
          <button className='btn btn-success form-control'>Make Payments</button>


          






      </form>  
      </div>

    </div>
  )
}

export default Mpesa