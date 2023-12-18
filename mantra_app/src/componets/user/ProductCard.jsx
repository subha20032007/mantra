import React from 'react'
import styled from 'styled-components'

export const ProductCard = ({img,name,price,brand,category,gender}) => {
  return (
    <DIV>
    <div>
    <image src={img}/>    </div>
    <h3>Name: {name}</h3>
    <h3>Price{price}</h3>
    <h3>Brand:{brand}</h3>
    <h3>Category:{category}</h3>
    <p>Gender:{gender}</p>

    </DIV>
  )
}

const DIV=styled.div`
height:450px;
width:30%;
gap:20px;
margin:auto;
padding:3%;
border: 1px solid black;
border-radius: 9px;
div{
    height:100px;
    width:70%;
    margin:auto;
    border:1px solid black;

}

`
