import React from "react";

function BrrandInflueTable(props) {
  const { header } = props;
  return (
    <>
      <div className="bg-gray-200 border border-gray-400 w-96 rounded-xl">
        <div className="flex my-3 pl-6">
          <div>Top {header} Influencers</div>
        </div>
        <hr class="h-px my-3 bg-gray-400 border-0"></hr>
        <div className="p-3">
          <div className="ps-3 pb-2">
            <div className="text-base font-semibold">@username</div>
            <div className="font-normal text-gray-500">Micro Tier</div>
          </div>
          <div className="ps-3 pb-2">
            <div className="text-base font-semibold">@username</div>
            <div className="font-normal text-gray-500">Micro Tier</div>
          </div>
          <div className="ps-3">
            <div className="text-base font-semibold">@username</div>
            <div className="font-normal text-gray-500">Micro Tier</div>
          </div>
          <div className="ps-3">
            <div className="text-base font-semibold">@username</div>
            <div className="font-normal text-gray-500">Micro Tier</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrrandInflueTable;
