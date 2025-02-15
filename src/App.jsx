import Brand from "./components/Brand";
import ContactPage from "./components/ContactPage";
import Influencers from "./components/Influencers";
import Content from "./components/Content";

import Splash from "./components/Splash";
import Login from "./components/Login";
import Register from "./components/Register";
import Recovery from "./components/Recovery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reset from "./components/Reset";
import NavbarBrand from "./components/Brand/NavnarBrand";
import InfluencersBrand from "./components/Brand/InfluencerBrand";
import Home from "./components/Home";
import HomeBrand from "./components/Brand/HomeBrand";
import Activity from "./components/Activity";
import SecondBrand from "./components/SecondBrand";
import ThirdBrand from "./components/ThirdBrand";
import Cash from "./components/Cash";
import PostedPay from "./components/PostedPay";
import Error from "./components/Error";
import Reward from "./components/Reward";
import DistributeReward from "./components/DistributeReward";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Splash />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          {/* <Route exact path="/reset" element={<Reset />}></Route> */}
          <Route exact path="/reset" element={<Reset />}></Route>
          <Route exact path="/recovery" element={<Recovery />}></Route>
          <Route
            exact
            path="/brand"
            element={<Protected Component={Brand} />}
          ></Route>
          <Route
            exact
            path="/content"
            element={<Protected Component={Content} />}
          ></Route>
          <Route
            exact
            path="/influence"
            element={<Protected Component={Influencers} />}
          ></Route>
          <Route
            exact
            path="/brandcontact"
            element={<Protected Component={ContactPage} />}
          ></Route>

          <Route
            exact
            path="/activity"
            element={<Protected Component={Activity} />}
          ></Route>
          <Route
            exact
            path="/cash"
            element={<Protected Component={Cash} />}
          ></Route>
          <Route
            exact
            path="/reward"
            element={<Protected Component={Reward} />}
          ></Route>
          <Route
            exact
            path="/postedPay"
            element={<Protected Component={PostedPay} />}
          ></Route>
          <Route
            exact
            path="/distributeReward"
            element={<Protected Component={DistributeReward} />}
          ></Route>
          <Route path="*" element={<Error />}></Route>

          <Route
            exact
            path="/brandInfluence"
            element={<Protected Component={InfluencersBrand} />}
          ></Route>
          <Route
            exact
            path="/homeBrand"
            element={<Protected Component={HomeBrand} />}
          ></Route>
          <Route
            exact
            path="/secondBrand"
            element={<Protected Component={SecondBrand} />}
          ></Route>
          <Route
            exact
            path="/thirdBrand"
            element={<Protected Component={ThirdBrand} />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
