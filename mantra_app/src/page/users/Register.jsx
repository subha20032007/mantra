import React, { useEffect, useState } from "react";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth,createUserWithEmailAndPassword} from '../../firebase/FirebaseConfig';
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
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Badge } from "@chakra-ui/react";
import "./register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passPwd, setPassPwd] = useState("");
  const [passPwd2, setPassPwd2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState("false");
  const [matchPass, setMatchPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [isAlert, setIsAlert] = useState(false)

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handlePassPwd = (e) => setPassPwd(e.target.value);
  const handlePassPwd2 = (e) => setPassPwd2(e.target.value);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./<>?:;'\"`~]).{8,}$/;
  // const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleMatch = () => {
    const match = passPwd.split("").join("");
    const match2 = passPwd2.split("").join("");
    console.log(match, match2);
    if (match !== match2) {
      // setMatchPass(false);
      setIsErr(true);
      console.log("password not match");
    } else{
      // setMatchPass(true);
      setIsErr(false);
      console.log("password match");
    }
  };
  const isError = {
    firstName: firstName === "",
    lastName: lastName === "",
    userName: userName === "",
    email: !emailRegex.test(email),
    mobile: mobile === "" || !/^[0-9]{11}$/.test(mobile),
    passPwd: !passwordRegex.test(passPwd),
    passPwd2: !passwordRegex.test(passPwd2),
    confirm: isErr,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Create a new user in Firebase Authentication
      const user = await createUserWithEmailAndPassword(auth, email, passPwd);

      // Access the new user via userCredential.user
      console.log(' a new User registered successfully:', user);

    setIsSubmitting(false);
    setFirstName(firstName);
    setLastName(lastName);
    setUserName(userName);
    setEmail(email);
    setMobile(mobile);
    setPassPwd(passPwd);
    setPassPwd2(passPwd2);
    setShowPassword(false);
    setShowPassword2(false);
    // setMatchPass(false);
    setIsSubmitting(false)
    setIsAlert(true)
  } catch (error) {
    console.log('Registration failed:', error.message);
    console.log(error)
    // setIsErr(true); // Set error state or handle error as needed
  } 
  finally {
    setIsSubmitting(false);
    setTimeout(() => {
      setIsAlert(false)
    }, 2000);
    // setIsAlert(false)
  }
  };

  useEffect(() => {
    handleMatch();
  }, [isError]);

  return (
    <div className="register-main">
      <Grid
        templateColumns={{ base: "2fr", md: "repeat(2, 1fr)" }}
        gap={6}
        padding={5}
        className="register-form"
      >
        <GridItem colSpan={2}>
          <Heading>To register yourself.</Heading>
          <Text fontSize="2xl"> Please fill the form below</Text>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input type="text" value={firstName} onChange={handleFirstName} />
            {isError.firstName && (
              <FormErrorMessage>First Name is required.</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" value={lastName} onChange={handleLastName} />
            {isError.lastName && (
              <FormErrorMessage>Last Name is required.</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.userName}>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={userName} onChange={handleUserName} />
            {isError.userName && (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.mobile}>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="tel" value={mobile} onChange={handleMobile} />
            {isError.mobile && (
              <FormErrorMessage>
                Enter a valid 11-digit mobile number.
              </FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={handleEmail} />
            {isError.email && (
              <FormErrorMessage>Enter a valid email address.</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.passPwd}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={passPwd}
                onChange={handlePassPwd}
              />
              <InputRightElement>
                {showPassword ? (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword(false)}
                    style={{
                      color: "gray",
                    }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() => setShowPassword(true)}
                    style={{
                      color: "gray",
                    }}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.passPwd && (
              <FormErrorMessage>
                Password must be at least 8 characters and include at least one
                uppercase letter, one lowercase letter, one digit, and one
                special character.
              </FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.passPwd2}>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword2 ? "text" : "password"}
                value={passPwd2}
                onChange={handlePassPwd2}
              />
              <InputRightElement>
                {showPassword2 ? (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword2(false)}
                    style={{
                      color: "gray",
                    }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() => setShowPassword2(true)}
                    style={{
                      color: "gray",
                    }}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.passPwd2 && (
              <FormErrorMessage>
                Password must be at least 8 characters and include at least one
                uppercase letter, one lowercase letter, one digit, and one
                special character.
              </FormErrorMessage>
            )}
            {isError.confirm ? (
               <Stack direction="row">
               <Badge variant="solid" colorScheme="red">
                 Password is not same!
               </Badge>
             </Stack>
            ) : (
              <Stack direction="row">
                <Badge variant="solid" colorScheme="green">
                  Password Confirmed!
                </Badge>
              </Stack>
            )}
           {
isAlert &&
            <Alert status='success'>
    <AlertIcon />
   A new user registered!
  </Alert>
            }

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              loadingText="Submitting"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>

           
          </FormControl>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Register;
