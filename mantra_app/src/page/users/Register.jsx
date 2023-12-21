import React, { useEffect, useState } from "react";

import {
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Grid,
  GridItem,
  Center,
  Toast,
  Box,
  Link,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Badge } from "@chakra-ui/react";
import {
  fColor,
  color,
  background,
  bgColor,
  bColor,
  placeholderColor,
  hoverColor,
} from "utils/ThemeApplication";

import { DASHBOARD, LOGIN, ROOT } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useRegister } from "hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "utils/form-validate";
import { easeInOut } from "framer-motion";
// import "./register.css";

const Register = () => {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: ROOT,
    });
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passPwd, setPassPwd] = useState("");
  const [passPwd2, setPassPwd2] = useState("");
  const [isErr, setIsErr] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./<>?:;'\"`~]).{8,}$/;
  // const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleMatch = () => {
    const match = passPwd.split("").join("");
    const match2 = passPwd2.split("").join("");
    // console.log(match, match2);
    if (match !== match2) {
      // setMatchPass(false);
      setIsErr(true);
      // console.log("password not match");
    } else {
      // setMatchPass(true);
      setIsErr(false);
      // console.log("password match");
    }
  };
  const isError = {
    userName: userName === "",
    email: !emailRegex.test(email),
    mobile: mobile === "" || !/^[0-9]{11}$/.test(mobile),
    passPwd: !passwordRegex.test(passPwd),
    passPwd2: !passwordRegex.test(passPwd2),
    confirm: isErr,
  };

  return (
    <div
      className="main"
      style={{
        background: background,
      }}
    >
      <Center w="100%" h="100dvh">
        <Box
          mx="1"
          maxW="md"
          p="9"
          borderWidth="1px"
          borderRadius="lg"
          style={{
            backgroundColor: "white",
          }}
        >
          <Heading mb="4" size="lg" textAlign="center">
            Register
          </Heading>

          <form onSubmit={handleSubmit(handleRegister)}>
            <FormControl isInvalid={errors.username} py="2">
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                // borderRadius={0}
                _active={color}
                _placeholder={{ color: placeholderColor }}
                {...register("username", usernameValidate)}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email} py="2">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                _placeholder={{ color: placeholderColor }}
                placeholder="user@email.com"
                {...register("email", emailValidate)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} py="2">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password123"
                _placeholder={{ color: placeholderColor }}
                {...register("password", passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt="4"
              type="submit"
              color={fColor}
              backgroundColor={bColor}
              motion={{
                animate: {
                  all: 1,
                  easeInOut: "ease-in-out",
                },
              }}
              _hover={{ backgroundColor: hoverColor }}
              // colorScheme={fColor}
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Signing Up"
            >
              Register
            </Button>
          </form>

          <Text fontSize="xlg" align="center" mt="6">
            Already have an account?{" "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color={bColor}
              fontWeight="medium"
              textDecor="underline"
              // _hover={{ background: }}
            >
              Log In
            </Link>{" "}
            instead!
          </Text>
        </Box>
      </Center>
    </div>
  );
};

export default Register;
