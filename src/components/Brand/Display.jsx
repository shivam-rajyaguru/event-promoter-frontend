import React from "react";
import { useBrandGlobalContext } from "../../../context/brandContext";

function Display() {
  const { brands } = useBrandGlobalContext();
  return (
    <>
      <div className="mt-5" style={{ width: "770px" }}>
        <div className="flex justify-center mt-12">
          <h1 className="text-xl font-mono">Get Better Marketing Display</h1>
        </div>

        <div className="mt-10">
          <div className="mx-20 bg-gray-200 rounded-2xl border-4 border-gray-300">
            <div
              className="h-80 bg-gray-100 text-gray-600 font-bold text-4xl flex justify-center items-center rounded-t-2xl"
              style={{ width: "602px" }}
            >
              Brand Image
            </div>
            <div class="relative w-36 h-36 ml-10 -mt-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
              <svg
                class="absolute w-38 h-34 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-6">
              <p className="font-bold text-xl m-4 pt-4">
                {brands.brandName === ""
                  ? "Junior Achievement of Dallas"
                  : brands.brandName}
              </p>
              <p className="text-sm ml-4 -mt-3 mb-6">
                {/* {brands.brandCategory === "" ? "" : brands.brandCategory} */}
                1234 Address , St.Dallas , Texas 60607
              </p>
              <p className="mt-2 m-4 pb-4" style={{ fontSize: "17px" }}>
                {brands.brandDescription === ""
                  ? "Now is the winter of our discontent Made glorious summer by this sun of York;And all the clouds that lour'd upon our houseIn the deep bosom of the ocean buried.Now are our brows bound with victorious wreaths"
                  : brands.brandDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
