import Brand from "./components/Brand";
import ContactPage from "./components/ContactPage";
import Influencers from "./components/Influencers";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reset from "./components/Reset";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Splash />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/reset" element={<Reset />}></Route>
          <Route exact path="/recovery" element={<Recovery />}></Route>
          <Route exact path="/brand" element={<Brand />}></Route>
          <Route exact path="/influence" element={<Influencers />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
