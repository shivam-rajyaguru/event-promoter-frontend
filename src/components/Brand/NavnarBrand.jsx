import React from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/store";

const NavbarBrand = () => {
  //   const { username } = useAuthStore((state) => state.auth);
  return (
    <>
      <div className="">
        <nav className=" flex justify-between h-12 items-center bg-slate-100">
          <h2 className="text-2xl ml-12">KeepUsPost</h2>
          <ul className="flex space-x-8 mr-36">
            <Link to="/homeBrand" className="cursor-pointer">
              Home
            </Link>
            <Link to="/brand" className="cursor-pointer">
              Brand
            </Link>
            <Link to="/brandInfluence" className="cursor-pointer">
              Influencers
            </Link>
            <Link to="/brandcontact" className="cursor-pointer">
              Contact Us
            </Link>
            <li>
              <div className="flex space-x-3 ml-8">
                <FaRegBell size={23} />
                <img
                  src=""
                  style={{ height: "20px", width: "20px", borderRadius: "50%" }}
                  alt="phto"
                />
                <p>David</p>
              </div>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarBrand;
