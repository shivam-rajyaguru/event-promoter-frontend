import React from "react";

function BrandChart() {
  return (
    <div className="bg-gray-200 border border-gray-400 w-full rounded-xl mt-10">
      <div className="flex flex-col pb-5">
        <div>
          <div className="flex justify-between w-full px-6 mt-3 border-b-black">
            <p className="text-xl">Brand Review</p>
            <p className="bg-slate-200 text-gray-400 border border-gray-400 p-1 px-2 rounded">
              20/07/2023 - 20/08/2023
            </p>
          </div>
        </div>
        <hr class="h-px my-3 bg-gray-400 border-0"></hr>
        <div className="px-6">
          <div className="text-black text-4xl py-2">24,103</div>
          <div className="text-black text-base py-2">Total brand growth</div>
        </div>
      </div>
    </div>
  );
}

export default BrandChart;
