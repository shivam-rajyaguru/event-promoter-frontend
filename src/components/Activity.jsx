import React from "react";
import Navbar from "./Navbar";
import BrandAnalysisTable from "./Brand/BrandAnalysisTable";
import BrandChart from "./Brand/BrandChart";
import BrrandInflueTable from "./Brand/BrrandInflueTable";

function Activity() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-72">
        <div className="  mt-10">
          <div className="text-3xl font-medium">Activity</div>
        </div>
        <div className="flex justify-between mt-10">
          <BrandAnalysisTable />
          <BrandAnalysisTable />
          <BrandAnalysisTable />
        </div>
        <div>
          <BrandChart />
        </div>
        <div className="flex justify-between mt-10">
          <BrrandInflueTable header={"Submitted"} />
          <BrrandInflueTable header={"Approved"} />
          <BrrandInflueTable header={"Posted"} />
        </div>
      </div>
    </>
  );
}

export default Activity;
