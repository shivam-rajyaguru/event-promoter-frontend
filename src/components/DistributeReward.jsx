import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiTwotoneCrown } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";

function DistributeReward() {
  return (
    <>
      <div>
        <Navbar />
        {/* style={{ height: "100vh" }} */}
        <div className="mx-80">
          <div className=" mt-24 flex justify-between">
            <h2 className="text-2xl">Distribute Reward</h2>
            <Link to="/reward" className="flex text-lg underline">
              <span>
                <MdKeyboardArrowLeft size={26} />
              </span>
              Back to search
            </Link>
          </div>

          <div className="flex h-96 mt-16">
            <div className="bg-gray-100 w-4/12 rounded-xl mr-8">
              <div className="h-96 flex flex-col items-center justify-center ">
                <div class="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
                  <svg
                    class="absolute w-30 h-30 text-gray-300 -left-1"
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
                <div className="mt-2">@username</div>
                <div className="text-xs text-gray-700">Micro tier</div>
              </div>
            </div>
            <div className="bg-gray-100 w-9/12 rounded-xl">
              <div className="flex flex-col justify-center items-center">
                <div className="flex text-3xl mt-12 text-blue-500 ">
                  <div className="flex cursor-pointer hover:underline underline-offset-8 mb-2">
                    <span className="mr-3">
                      <ImTrophy size={60} />
                    </span>
                    <div className="flex-col">
                      <div>Distribute</div>
                      <div>Rewards</div>
                    </div>
                  </div>

                  <div className="flex ml-8 cursor-pointer hover:underline underline-offset-8 mb-2">
                    <span className="mr-3">
                      <FaShoppingCart size={60} />
                    </span>
                    <div className="flex-col">
                      <div>Purchase</div>
                      <div>Points</div>
                    </div>
                  </div>

                  <div className="flex ml-8 cursor-pointer hover:underline underline-offset-8 mb-2">
                    <span className="mr-3">
                      <FaGift size={60} />
                    </span>
                    <div className="flex-col">
                      <div>Gift</div>
                      <div>Coins</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-12 text-gray-400">
                  <div className="text-4xl">Brand Reward Title</div>
                </div>
                <div className="flex text-white mt-10">
                  <button className=" bg-orange-400 p-3 px-10 rounded-lg">
                    DISTRIBUTE REWARDS
                  </button>
                </div>
                <div className="mt-6 text-lg">
                  Clicking here to confirms that your brand reward has been sent
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center text-6xl text-green-600 mt-12 font-medium">
              Reward Distributed!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DistributeReward;
