import React, { useState } from "react";
import NavbarBrand from "./Brand/NavnarBrand";
import { useBrandGlobalContext } from "../../context/brandContext";
import Display from "./Brand/Display";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

function Brand() {
  const { brands, setBrands } = useBrandGlobalContext();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("click");
  //   addBrand(brands.brandName, brands.brandCategory, brands.brandDescription);
  // };

  const onChange = (e) => {
    setBrands({ ...brands, [e.target.name]: [e.target.value] });
  };

  const navigate = useNavigate();
  return (
    <>
      <NavbarBrand />

      <div className="flex">
        <div
          // className="bg-slate-200"
          className="mt-7"
          style={{ height: "100vh", width: "1000px" }}
        >
          <div className="mt-1 ml-8">
            {/* <h2 className="mb-5">KeepUsPost</h2> */}
            <h2 className="font-bold text-3xl mb-5 pt-5">Add Your Brand</h2>

            <div className="w-9/12 text-xl">
              First things to add your brand to keepUsPost Marketplace App. Make
              sure to include all the information to attract influencer to your
              brand.
            </div>
            <input
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder="Brand name (required)"
              id="brandName"
            />
            <div className="text-md w-5/6 mt-2 font-normal">
              use the name of your brand , business or organization that best
              identifiles with your products or services
            </div>
            <input
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              type="text"
              name="brandCategory"
              onChange={onChange}
              placeholder="Category (required)"
              id="brandCategory"
            />
            <div className="text-md w-5/6 mt-2 font-normal">
              Enter a category that best describe your brand
            </div>
            <textarea
              name="brandDescription"
              placeholder="Brand Description"
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              id="brandDescription"
              onChange={onChange}
              rows="6"
            ></textarea>
            <div className="text-md w-5/6 mt-2 font-normal">
              Tell influencer a little about your brand
            </div>
            {/* <button
                type="button"
                // onClick={handleClick}
                className="rounded-lg p-3 w-3/4 mt-10  bg-blue-400"
              >
                + Add Your Brand
              </button> */}
            <div className="flex justify-between" style={{ width: "725px" }}>
              <Link className="rounded-lg px-24 py-3 w-2/5 mt-10  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg">
                Previous
              </Link>
              <Link
                className="rounded-lg px-24 py-3 w-2/5 mt-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg"
                to="/secondBrand"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <Display />
      </div>
      <Footer />
    </>
  );
}

export default Brand;
