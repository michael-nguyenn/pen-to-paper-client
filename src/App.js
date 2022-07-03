import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import User from "./pages/User/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
