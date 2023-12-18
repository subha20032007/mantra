import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/productReducer/action'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'

export const ProductList = () => {

const dispatch=useDispatch()
 
const products=useSelector((store)=>store.productReducer.products)
    useEffect(()=>{
    dispatch(getProduct())
    },[])
  return (
    <DIV>
    {
        products.map((el)=>(
            <ProductCard {...el}/>
        ))
    }
    </DIV>
  )
}
const DIV=styled.div`
    width:80%;
    display: flex;
    flex-wrap: wrap;
`