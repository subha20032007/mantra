import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { fColor, bColor } from "utils/ThemeApplication";
export const Navbar = () => {
  return (
    <DIV>
      <Link to="/" color={bColor} as={RouterLink}>
        Home
      </Link>
      <Link to="/admin" color={bColor} as={RouterLink}>
        Admin
      </Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  height: 60px;
  border: 1px solid gray;
  align-items: center;
  box-shadow: 1px solid gray;
`;
