import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Cookies from "universal-cookie";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { fColor, bColor, hoverColor } from "utils/ThemeApplication";
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
        <GridItem bg="orange.300" w="100%" h="90vh" area="header">
          <Center className="">
            <h1>Welcome to the Home page</h1>
          </Center>
        </GridItem>

        <GridItem
          // pl="4"
          bg="blue.300"
          area="footer"
          height={100}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={signUserOut}
            backgroundColor={bColor}
            _hover={{ backgroundColor: hoverColor }}
            color={fColor}
          >
            <span style={{ marginRight: "5px" }}>Logout</span>
            <LogoutIcon />
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
