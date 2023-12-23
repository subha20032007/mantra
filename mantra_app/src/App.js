import { Navbar } from "./componets/user/Navbar";
import { AllRoutes } from "./page/users/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;
