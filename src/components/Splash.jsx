import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/shutterstock/photos/2080080004/display_1500/stock-photo-profile-side-view-portrait-of-attractive-cheerful-girl-demonstrating-copy-space-ad-new-isolated-2080080004.jpg')",

          opacity: 1,
          height: "100vh",
        }}
        className="h-screen"
      >
        <div className="flex pt-8 ">
          <div className="ml-16 font-bold text-4xl text-black">
            Event-Promoter
          </div>
          <div className="ml-[70%]">
            <Link
              to="/login"
              className="mr-5 bg-blue-200 p-3 px-4 text-xl rounded-xl text-black hover:bg-blue-800 hover:text-white"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="mr-5 bg-blue-200 p-3 px-4 text-xl rounded-xl text-black hover:bg-blue-800 hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div>
          <div className="W-96 mt-28 ml-24">
            <div className="text-7xl text-white">We Believe Everyone</div>
            <div className="text-7xl text-white">Has Influence</div>
          </div>
          <div style={{ width: "650px" }} className="text-2xl ml-24 mt-10">
            Seamless and affordable. Event-Promoter partners you with your
            community. Get the kind of brand awareness that turns into loyal
            customers.
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
