import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

function BrandAnalysisTable() {
  return (
    <div className="bg-gray-200 border border-gray-400 w-96 rounded-xl">
      <div className="flex flex-col pb-5">
        <div>
          <div className="flex justify-between w-96 px-6 mt-3 border-b-black">
            <p className="text-xl">Brand Review</p>
            <p className="bg-blue-500 text-white p-1 px-2 rounded">Monthly</p>
          </div>
        </div>
        <hr class="h-px my-3 bg-gray-400 border-0"></hr>
        <div className="px-6">
          <div className="text-black text-4xl py-2">24,103</div>
        </div>
        <div className="flex justify-between w-96 px-6">
          <p className="text-sm">Compare to last week</p>
          <p className="flex text-green-600 text-xl">
            13%{" "}
            <span className="">
              {" "}
              <FaArrowTurnUp />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandAnalysisTable;
