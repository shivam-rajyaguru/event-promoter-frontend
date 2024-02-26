import React, { useState } from "react";
import Navbar from "./Navbar";

function Brand() {
  const [brandName, setBrandName] = useState("");
  const [brandCategory, setBrandCategory] = useState("");
  const [brandDesc, setBrandDesc] = useState("");
  return (
    <>
      <Navbar />

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
              name=""
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Brand name (required)"
              id=""
            />
            <div className="text-md w-5/6 mt-2 font-normal">
              use the name of your brand , business or organization that best
              identifiles with your products or services
            </div>
            <input
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              type="text"
              name=""
              value={brandCategory}
              onChange={(e) => setBrandCategory(e.target.value)}
              placeholder="Category (required)"
              id=""
            />
            <div className="text-md w-5/6 mt-2 font-normal">
              Enter a category that best describe your brand
            </div>
            <textarea
              name=""
              placeholder="Brand Description"
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              id=""
              value={brandDesc}
              onChange={(e) => setBrandDesc(e.target.value)}
              rows="6"
            ></textarea>
            <div className="text-md w-5/6 mt-2 font-normal">
              Tell influencer a little about your brand
            </div>
            <button
              type="button"
              className="rounded-lg p-3 w-3/4 mt-10  bg-blue-400"
            >
              Add Your Brand
            </button>
          </div>
        </div>
        <div className="mt-5" style={{ width: "770px" }}>
          <div className="flex justify-center mt-12">
            <h1 className="text-xl font-mono">Get Better Marketing Display</h1>
          </div>
          <div className="mt-10">
            <div className="mx-20 bg-gray-100 rounded-xl">
              <p className="text-xl m-4 pt-4">
                {brandName === "" ? "Brand name" : brandName}
              </p>
              <p className="font-bold text-xl m-4">
                {brandCategory === ""
                  ? "Junior Achievement of Dallas"
                  : brandCategory}
              </p>
              <p className="mt-2 m-4 pb-4" style={{ fontSize: "17px" }}>
                {brandDesc === ""
                  ? "Now is the winter of our discontent Made glorious summer by this sun of York;And all the clouds that lour'd upon our houseIn the deep bosom of the ocean buried.Now are our brows bound with victorious wreaths"
                  : brandDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
