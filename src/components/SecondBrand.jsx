import React from "react";

import NavbarBrand from "./Brand/NavnarBrand";
import { useBrandGlobalContext } from "../../context/brandContext";
import Display from "./Brand/Display";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function SecondBrand() {
  const { addBrand, brands, setBrands } = useBrandGlobalContext();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
    addBrand(brands.brandName, brands.brandCategory, brands.brandDescription);
  };

  const onChange = (e) => {
    setBrands({ ...brands, [e.target.name]: [e.target.value] });
  };

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
            <h2 className="font-bold text-3xl mb-5 pt-5">
              Finish setting up your brand
            </h2>

            <div className="w-9/12 text-xl">
              Congrats! You added {brands.brandName} Now add more details to
              help influencer partner with your newly added brand.
            </div>

            <div className="font-extrabold text-base mt-4">
              Brand Information
            </div>
            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" Website"
              id="brandName"
            />
            <div className="flex">
              <div>
                <select
                  name=""
                  id=""
                  className="rounded-lg p-3 mt-4 border border-gray-300 bg-gray-200"
                >
                  <option selected value="US">
                    US (+1)
                  </option>
                  <option value="AUS">AUS (+61)</option>
                  <option value="AFZ">AFG (+93)</option>
                  <option value="CHN">CHN (+86)</option>
                  <option value="HK">HK (+852)</option>
                  <option value="IND">IND (+91)</option>
                  <option value="PAK">PAK (+92)</option>
                  <option value="RUS">RUS (+7)</option>
                  <option value="LKA">LKA (+94)</option>
                  <option value="UKR">UKR (+380)</option>
                </select>
              </div>
              <div>
                <input
                  className="rounded-lg p-3 mt-4 ml-4 border border-gray-300 bg-slate-100"
                  type="text"
                  style={{ width: "567px" }}
                  name="brandCategory"
                  onChange={onChange}
                  placeholder="Phone number"
                  id="brandCategory"
                />
              </div>
            </div>

            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" Email"
              id="brandName"
            />
            <div className="font-extrabold text-base mt-4">Location</div>
            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" Address"
              id="brandName"
            />
            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" City"
              id="brandName"
            />
            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" State"
              id="brandName"
            />
            <input
              className="rounded-lg p-3 w-3/4 mt-2 bg-slate-100 border border-gray-300"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder=" Zip"
              id="brandName"
            />

            <div className="font-extrabold text-base mt-4">Social Channels</div>
            <div className="flex items-center">
              <div className="mt-3">
                {" "}
                <FaFacebookSquare size={38} />
              </div>
              <div>
                <input
                  className="rounded-lg p-3 mt-4 ml-4 border border-gray-300 bg-slate-100"
                  type="text"
                  style={{ width: "675px" }}
                  name="brandCategory"
                  onChange={onChange}
                  placeholder=" Facebook"
                  id="brandCategory"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mt-3">
                {" "}
                <FaSquareInstagram size={38} />
              </div>
              <div>
                <input
                  className="rounded-lg p-3 mt-4 ml-4 border border-gray-300 bg-slate-100"
                  type="text"
                  style={{ width: "675px" }}
                  name="brandCategory"
                  onChange={onChange}
                  placeholder=" Facebook"
                  id="brandCategory"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mt-3">
                {" "}
                <BsTwitterX size={38} />
              </div>
              <div>
                <input
                  className="rounded-lg p-3 mt-4 ml-4 border border-gray-300 bg-slate-100"
                  type="text"
                  style={{ width: "675px" }}
                  name="brandCategory"
                  onChange={onChange}
                  placeholder=" Facebook"
                  id="brandCategory"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="rounded-lg p-3 w-3/4 mt-10  bg-blue-400"
            >
              + Add Your Brand
            </button>
            <div className="flex justify-between" style={{ width: "725px" }}>
              <Link
                className="rounded-lg px-24 py-3 w-2/5 mt-10  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg"
                to="/brand"
              >
                Previous
              </Link>
              <Link
                className="rounded-lg px-24 py-3 w-2/5 mt-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg"
                to="/thirdBrand"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <Display />
      </div>
    </>
  );
}

export default SecondBrand;
