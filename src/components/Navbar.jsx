import React from "react";
import { FaRegBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { useGlobalContext } from "../../context/influenceContext";

const Navbar = () => {
  const { username } = useAuthStore((state) => state.auth);
  const { file } = useGlobalContext();
  console.log(username, file);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <div className="">
        <nav className=" flex justify-between h-12 items-center bg-slate-100">
          <h2 className="text-2xl ml-12">Event-Promoter</h2>
          <ul className="flex space-x-8 mr-36">
            {/* <Link to="/home" className="cursor-pointer">
              Home
            </Link> */}
            <Link to="activity" className="cursor-pointer">
              Activity
            </Link>
            <Link to="/content" className="cursor-pointer">
              Content
            </Link>
            <Link to="/influence" className="cursor-pointer">
              Influencers
            </Link>
            <Link to="/cash" className="cursor-pointer">
              Cash & Reward
            </Link>
            <li>
              <div className="flex space-x-3 ml-8">
                <FaRegBell size={23} />
                <img
                  src={file}
                  style={{ height: "35px", width: "35px", borderRadius: "50%" }}
                  alt="phto"
                />
                <p>{username}</p>
              </div>{" "}
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
