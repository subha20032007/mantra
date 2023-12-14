import React, { useState } from 'react'
import {styled} from "styled-components"
import { addProduct } from '../../redux/productReducer/action'
import { useDispatch } from 'react-redux'
const initialProducts={
  name:"",
  img:"",
  price:"",
  brand:"",
  gender:"",
  category:""
}
export const Admin = () => {

  const [products,setProducts]=useState(initialProducts)
const dispatch=useDispatch()
  const handelChange=(e)=>{
    const {name,value}=e.target
   setProducts((prev)=>{
    return {...prev,[name]:name==="price"?+value:value}
   })
  }

  const handelSubmit=(e)=>{
    e.preventDefault()
dispatch(addProduct(products))
setProducts(initialProducts)
  }
  return (
    <>
    
    <DIV>
     
      <form action="" onSubmit={handelSubmit}>
      <h1>Admin Page</h1>
        <input value={products.name} name="name" type="text" onChange={handelChange} placeholder="Product Name" />
        <br/>
        
        <input value={products.img} name="img" type="text" onChange={handelChange} placeholder="Product Image" />
        <br/>
        
        <input value={products.price} name="price" type="text" onChange={handelChange} placeholder="Product Price"/>
        <br/>
       
        <input value={products.brand} name="brand" type="text" onChange={handelChange} placeholder="Product Brand" />
        <br/>
       
        <select value={products.gender} name="gender" id="" onChange={handelChange}>
          <option value="">Select Gender</option>
          <option value="men">Men</option>
          <option value="woman">Woman</option>
          <option value="kid">Kids</option>
        </select>
        <br/>
        <select value={products.category} name="category" id="" onChange={handelChange}>
          <option value="">Select Category</option>
            <option value="top-ware">Top Wear</option>
              <option value="bottom-ware">Bottom Wear</option>
              <option value="shose">Shoes</option>
        </select>
        <br/>
        <input type="submit" className='btnsub'   />
      </form>
    </DIV>
    </>
  )
}

const DIV=styled.div`
  width:30%;
  margin:auto;
 border:1px solid black;
 margin-top: 50px;
padding: 2%;

h1{
  margin: auto;
margin-bottom: 10px;
}
 input{
  width: 90%;
  height:20px;
 
 }
 select{
  width: 90%;
  height:30px;
 
 }
 form{
  display: flex;
  flex-direction: column;
  gap:5px;
 align-items: center;
 }
.btnsub{
background-color:black ;
color:white;
height:30px;
width:70%;
padding:1%;

 }
`