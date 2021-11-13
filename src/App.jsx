import { ChakraProvider } from "@chakra-ui/provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./lib/routes";
import { theme } from "./lib/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route, i) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
