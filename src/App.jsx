import { ChakraProvider } from "@chakra-ui/provider";
import { QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import queryClient from "./lib/query-client";
import { routes } from "./lib/routes";
import { theme } from "./lib/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routes.map((route, i) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
