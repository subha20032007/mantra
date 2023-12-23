import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Cookies from "universal-cookie";
import { Grid, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import LogoutIcon from "@mui/icons-material/Logout";

const Home = () => {
  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      Cookies.remove("auth-token");
      navigate("/");
    } catch (err) {
      console.error(err);
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
                        "nav main"
                        "footer footer"`}
        gridTemplateRows="50px 1fr 30px"
        gridTemplateColumns="150px 1fr"
        h="80vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area="header">
          <div className="header">
            <h2>Welcome to the Home page</h2>
          </div>
        </GridItem>
        <GridItem pl="2" bg="pink.300" area="nav">
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area="main">
          Main
        </GridItem>
        <GridItem
          pl="4"
          bg="blue.300"
          area="footer"
          height={100}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button colorScheme="teal" variant="solid" onClick={signUserOut}>
            <span style={{ marginRight: "5px" }}>Logout</span>
            <LogoutIcon />
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
