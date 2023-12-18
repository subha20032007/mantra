import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './register.css';
import { InputField, RegisError } from './Constants/Constant';
import Loader from './Loader/Loader';

const Register = () => {
  const [userInput, setUserInput] = useState(InputField)
  const [showPassword, setShowPassword] = useState({
    One: false,
    Two: false
  })
  const [loader, setLoader] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isError = {
    firstName: userInput.firstName === '',
    lastName: userInput.lastName === '',
    userName: userInput.userName === '',
    email: !emailRegex.test(userInput.email),
    mobile: userInput.mobile === '' || !/^[0-9]{10}$/.test(userInput.mobile),
    passPwd: !passwordRegex.test(userInput.passPwd),
    passPwd2: userInput.passPwd !== userInput.passPwd2,
    matchPass: userInput.passPwd !== userInput.passPwd2,
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value })
  }

  const handleShowPass = (e) => {
    setShowPassword(({ ...showPassword, [e]: !showPassword[e] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoader(false);
    setUserInput(InputField)
  };

  return (
    <div className="register-main">
      <Grid
        templateColumns={{ base: '2fr', md: 'repeat(2, 1fr)' }}
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
            <Input type="text" value={userInput.firstName} name='firstName' onChange={handleChange} />
            {isError.firstName && (
              <FormErrorMessage>{RegisError.firstName}</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' value={userInput.lastName} name='lastName' onChange={handleChange} />
            {isError.lastName && (
              <FormErrorMessage>{RegisError.lastName}</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.userName}>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={userInput.userName} name='userName' onChange={handleChange} />
            {isError.userName && (
              <FormErrorMessage>{RegisError.userName}</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.mobile}>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="tel" value={userInput.mobile} name='mobile' onChange={handleChange} />
            {isError.mobile && (
              <FormErrorMessage>{RegisError.mobile}</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={userInput.email} name='email' onChange={handleChange} />
            {isError.email && (
              <FormErrorMessage>{RegisError.email}</FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.passPwd}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword.One ? 'text' : 'password'}
                value={userInput.passPwd}
                name='passPwd'
                onChange={handleChange}
              />
              <InputRightElement>
                {showPassword.One ? (
                  <VisibilityOffIcon onClick={() => handleShowPass('One')} />
                ) : (
                  <VisibilityIcon onClick={() => handleShowPass('One')} />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.passPwd && (
              <FormErrorMessage>
                {RegisError.passPwd}
              </FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.passPwd2}>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword.Two ? 'text' : 'password'}
                value={userInput.passPwd2}
                name='passPwd2'
                onChange={handleChange}
              />
              <InputRightElement>
                {showPassword.Two ? (
                  <VisibilityOffIcon onClick={() => handleShowPass('Two')} />
                ) : (
                  <VisibilityIcon onClick={() => handleShowPass('Two')} />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.matchPass && (
              <FormErrorMessage>
                {RegisError.match}
              </FormErrorMessage>
            )}
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
            >
              {
                loader ?
                  <Loader />
                  : 'Submit'
              }
            </Button>
          </FormControl>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Register;
