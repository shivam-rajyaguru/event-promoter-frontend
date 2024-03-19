import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiTwotoneCrown } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";

function PostedPay() {
  return (
    <>
      <div>
        <Navbar />
        {/* style={{ height: "100vh" }} */}
        <div className="mx-80">
          <div className=" mt-24 flex justify-between">
            <h2 className="text-2xl">Posted Pay</h2>
            <Link to="/cash" className="flex text-lg underline">
              <span>
                <MdKeyboardArrowLeft size={26} />
              </span>
              Back to search
            </Link>
          </div>

          <div className="flex h-80 mt-16">
            <div className="bg-gray-100 w-4/12 rounded-xl mr-8">
              <div className="h-80 flex flex-col items-center justify-center ">
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
                <div className="flex text-3xl mt-12 text-blue-700 border-b-4 border-blue-700 rounded-b">
                  <span className="mr-3">
                    <AiTwotoneCrown size={30} />
                  </span>
                  Posted Pay
                </div>
                <div className="flex items-center justify-center mt-12 text-gray-400">
                  <div>
                    <FaDollarSign size={40} />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="p-5 rounded-xl ml-3 w-96"
                      placeholder="Enter the dollar amount to play"
                    />
                  </div>
                </div>
                <div className="flex ml-6 mt-7 text-white">
                  <button className="bg-gray-400 p-3 px-10 mx-2 rounded-lg">
                    Clear
                  </button>
                  <button className="bg-orange-400 p-3 px-10 rounded-lg">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center text-6xl text-green-600 mt-12 font-medium">
              Payment Sent !
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostedPay;
