import React from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../firebase/FirebaseConfig'
import {signOut, onAuthStateChanged } from 'firebase/auth'
import Cookies from 'universal-cookie';
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup,Stack } from '@chakra-ui/react'
import './home.css'
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components'
import { Sidebar } from '../../componets/user/Sidebar'
import { ProductList } from '../../componets/user/ProductList'
import styled from 'styled-components'
import { Sidebar } from '../../componets/user/Sidebar'
import { ProductList } from '../../componets/user/ProductList'

export const Home = () => {
  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      Cookies.remove("auth-token");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  });

  return (

   <>
   <Grid
  templateAreas={`"header header"

    <DIV>
      <Sidebar/>
      <ProductList/>
    </DIV>
  )
}
const DIV=styled.div`
display: flex;
`

    <>
      <Grid
        templateAreas={`"header header"

                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="80dvh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        // className='home--div'
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <div className="header">
            <h2>WELCOME! to Home page</h2>
          </div>
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem
          pl="4"
          bg="blue.300"
          area={"footer"}
          height={100}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* to log out  <ArrowForwardIosIcon /> */}
          <Button colorScheme="teal" variant="solid" onClick={signUserOut}>
            <span
              style={{
                marginRight: "5px",
              }}
            >
              logout
            </span>
            <LogoutIcon />
          </Button>
        </GridItem>
      </Grid>
      {/* <button onClick={signUserOut}>sign out</button> */}
    </>
  );
};

   </>

    <DIV>
      <Sidebar/>
      <ProductList/>
    </DIV>
  )
}
const DIV=styled.div`
display: flex;
`

export default Home;
