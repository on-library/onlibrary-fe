import { ChakraProvider } from "@chakra-ui/provider";
import { QueryClientProvider } from "react-query";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import RedirectToLanding from "./components/redirect-to-landing";
import queryClient from "./lib/query-client";
import { routes } from "./lib/routes";
import { theme } from "./lib/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routes.map((route, i) => {
              return (
                <Route
                  path={route.path}
                  element={
                    route.guard === 1 ? (
                      localStorage.getItem("guard_role") == 1 ? (
                        route.component
                      ) : localStorage.getItem("guard_role") == 2 ? (
                        <RedirectToLanding to="/admin" />
                      ) : (
                        <RedirectToLanding />
                      )
                    ) : route.guard === 2 ? (
                      localStorage.getItem("guard_role") == 2 ? (
                        route.component
                      ) : localStorage.getItem("guard_role") == 1 ? (
                        <RedirectToLanding to="/my" />
                      ) : (
                        <RedirectToLanding to="/" />
                      )
                    ) : (
                      route.component
                    )
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
