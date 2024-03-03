import Brand from "./components/Brand";
import ContactPage from "./components/ContactPage";
import Influencers from "./components/Influencers";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reset from "./components/Reset";
import NavbarBrand from "./components/Brand/NavnarBrand";
import InfluencersBrand from "./components/Brand/InfluencerBrand";
import Home from "./components/Home";
import HomeBrand from "./components/Brand/HomeBrand";
import Activity from "./components/Activity";
import SecondBrand from "./components/SecondBrand";
import ThirdBrand from "./components/ThirdBrand";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Splash />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/reset" element={<Reset />}></Route>
          <Route exact path="/recovery" element={<Recovery />}></Route>
          <Route exact path="/brand" element={<Brand />}></Route>
          <Route exact path="/content" element={<Content />}></Route>
          <Route exact path="/influence" element={<Influencers />}></Route>
          <Route exact path="/brandcontact" element={<ContactPage />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/activity" element={<Activity />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/brandPage" element={<NavbarBrand />}></Route>
          <Route
            exact
            path="/brandInfluence"
            element={<InfluencersBrand />}
          ></Route>
          <Route exact path="/homeBrand" element={<HomeBrand />}></Route>
          <Route exact path="/secondBrand" element={<SecondBrand />}></Route>
          <Route exact path="/thirdBrand" element={<ThirdBrand />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
