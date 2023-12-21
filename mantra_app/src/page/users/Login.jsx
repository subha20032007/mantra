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
import { DASHBOARD, REGISTER, ROOT } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";
import { fColor, bColor, background, hoverColor } from "utils/ThemeApplication";

export default function Login() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: ROOT,
    });
  }

  return (
    <>
      <div
        className="main"
        style={{
          background: background,

          // padding: "15px",
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

            <form onSubmit={handleSubmit(handleLogin)}>
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

      <div>
        {/* <h1>Login Your Account</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Enter Your Email"
          type="email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Enter Your Password"
          type="password"
        />
        <button onClick={handleLogin}>Login</button> */}
      </div>
    </>
  );
}

// const DIV = styled.div`
//   display: flex;
//   gap: 20px;
//   width: 23%;
//   padding: 3%;
//   border: 1px solid black;
//   margin: auto;
//   flex-direction: column;
//   margin-top: 40px;
//   input {
//     height: 20px;
//   }
//   button {
//     width: 90%;
//     background-color: black;
//     color: white;
//     margin: auto;
//     padding: 2%;
//   }
//   h1 {
//     margin: auto;
//   }
//   h3 {
//     margin: auto;
//   }
// `;
