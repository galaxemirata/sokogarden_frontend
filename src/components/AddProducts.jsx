import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {

  const[product_name,setProduct_name]=useState()
  const[product_description,setProduct_description]=useState()
  const[product_cost,setProduct_cost]=useState()
  const[product_photo,setProduct_photo]=useState()

  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Kindly wait as we upload your Product")

    try {
      const data=new FormData()
        data.append("product_name",product_name)
        data.append("product_description",product_description)
        data.append("product_cost",product_cost)
        data.append("product_photo",product_photo)


        const response=await axios.post("http://collins.alwaysdata.net/api/addproducts",data)

      setLoading("")
      setSuccess(response.data.message)

      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")

      }

      
      


      
     catch (error) {
      setLoading("")
      setError(error.message)
      
      
    }







  }

  

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow'>
        <h1>Upload Products</h1>
        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" placeholder='Enter Product Name ' className='form-control' value={product_name} onChange={(e)=>setProduct_name(e.target.value)}/>
          <br />
          <br />
          <textarea name="" id="" placeholder='Describe your product ' className='form-control' value={product_description}onChange={(e)=>setProduct_description(e.target.value)}></textarea>
          <br />
          <br />
          <input type="text" placeholder='Enter product Cost'className='form-control' value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)}/>
          <br />
          <br />
          <b>Upload product photo</b>
          <br />
          <br />
          <input type="file" className='form-control' accept='image/*' onChange={(e)=>setProduct_photo(e.target.files[0])}/>
          <br />
          <input type="submit" value={"Upload product"} className='text-white bg-primary form-control'/>
          <br />

        </form>


      </div>
        
    </div>
  )
}

export default AddProducts