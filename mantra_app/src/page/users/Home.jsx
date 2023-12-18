import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '../../componets/user/Sidebar'
import { ProductList } from '../../componets/user/ProductList'

export const Home = () => {
  return (
    <DIV>
      <Sidebar/>
      <ProductList/>
    </DIV>
  )
}
const DIV=styled.div`
display: flex;
`