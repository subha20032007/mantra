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

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [passPwd, setPassPwd] = useState('');
  const [passPwd2, setPassPwd2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState('');
  const [matchPass, setMatchPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handlePassPwd = (e) => setPassPwd(e.target.value);
  const handlePassPwd2 = (e) => setPassPwd2(e.target.value);

  const handleMatch = () => {
    setShowPassword2(!showPassword2);
    setMatchPass(passPwd === passPwd2);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isError = {
    firstName: firstName === '',
    lastName: lastName === '',
    userName: userName === '',
    email: !emailRegex.test(email),
    mobile: mobile === '' || !/^[0-9]{11}$/.test(mobile),
    passPwd: !passwordRegex.test(passPwd),
    passPwd2: !passwordRegex.test(passPwd2),
    matchPass: passPwd !== passPwd2,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFirstName('');
    setLastName('');
    setUserName('');
    setEmail('');
    setMobile('');
    setPassPwd('');
    setPassPwd2('');
    setShowPassword(false);
    setShowPassword2(false);
    setMatchPass(false);
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
              <FormErrorMessage>Enter a valid 11-digit mobile number.</FormErrorMessage>
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
                type={showPassword ? 'text' : 'password'}
                value={passPwd}
                onChange={handlePassPwd}
              />
              <InputRightElement>
                {showPassword ? (
                  <VisibilityOffIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <VisibilityIcon onClick={() => setShowPassword(true)} />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.passPwd && (
              <FormErrorMessage>
                Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.
              </FormErrorMessage>
            )}
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isInvalid={isError.passPwd2}>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword2 ? 'text' : 'password'}
                value={passPwd2}
                onChange={handlePassPwd2}
              />
              <InputRightElement>
                {showPassword2 ? (
                  <VisibilityOffIcon onClick={() => setShowPassword2(false)} />
                ) : (
                  <VisibilityIcon onClick={handleMatch} />
                )}
              </InputRightElement>
            </InputGroup>
            {isError.passPwd2 && (
              <FormErrorMessage>
                Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.
              </FormErrorMessage>
            )}
            {isError.matchPass && (
              <FormErrorMessage>Both passwords must match.</FormErrorMessage>
            )}
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
