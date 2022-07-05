import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setIsLoginError={setIsLoginError}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route exact path="/calendar" element={<Calendar />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
