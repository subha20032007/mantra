import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/authReducer/action";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";
import { fColor, bColor, background, hoverColor } from "utils/ThemeApplication";
import { ROOT, REGISTER } from "lib/routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    login({
      email: data.email,
      password: data.password,
      redirectTo: ROOT,
    });
  };

  const onSubmit = (data) => {
    dispatch(loginAction(data));
    setEmail("");
    setPassword("");
    handleLogin(data);
  };

  return (
    <>
      <div
        className="main"
        style={{
          background: background,
        }}
      >
        <Center w="100%" h="100vh">
          <Box
            mx="1"
            maxW="md"
            p="10"
            borderWidth="1px"
            borderRadius="lg"
            style={{
              backgroundColor: "white",
            }}
          >
            <Heading mb="4" size="lg" textAlign="center">
              Log In
            </Heading>

            <form onSubmit={formHandleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.email} py="2">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
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
                size="md"
                w="full"
                isLoading={isLoading}
                loadingText="Logging In"
                _hover={{ backgroundColor: hoverColor }}
              >
                Log In
              </Button>
            </form>

            <Text fontSize="xlg" align="center" mt="6">
              Don't have an account?{" "}
              <Link
                as={RouterLink}
                to={REGISTER}
                color={bColor}
                fontWeight="medium"
                textDecor="underline"
                _hover={{ background: "teal.100" }}
              >
                Register
              </Link>{" "}
              instead!
            </Text>
            <h3 style={{ margin: "auto" }}>
              {" "}
              <br />
              <strong>Note:</strong>
              <em>{""}use this email and password to login </em>
              "email":"eve.holt@reqres.in" <br />
              "password": "cityslicka"
            </h3>
          </Box>
        </Center>
      </div>
    </>
  );
}
