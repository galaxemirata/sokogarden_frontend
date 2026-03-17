import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const GetProducts = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setproducts]=useState([])

  // variable to store an image
  const image_url="http://collins.alwaysdata.net/static/images/"

  // create a function to get our products from the api

  const fetchproducts=async()=>{

    setLoading("Please wait as we retrieve your products")


    try {
      
      const response= await axios.get("http://collins.alwaysdata.net/api/getproductdetails")
      console.log("the response is",response)
      setproducts(response.data)
      setLoading("")



    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }






  }

  // end of function to call the useEffect

  useEffect(()=>{
    fetchproducts()
  },[])

  return (
    <div className='row'>
      <h1>Available Products</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our products and bring one by one */}
      {products.map((product)=>(

      
      <div className='col-md-3 justify-content-center'>

        <div className='card shadow'>
          
        <img src={image_url+product.product_photo} alt="cake" className='product_img'/>
        
        <div className='card-body'> 
          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>{product.product_cost}</p>
          <input type="btn" className='btn bg-secondary text-white' value={"Make payment"} />
          
          


        </div>
        </div>

        
      </div>
      ))}
      
        
    </div>
  )
}

export default GetProducts