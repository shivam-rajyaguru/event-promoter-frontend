import React from "react";
import NavbarBrand from "./NavnarBrand";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

function HomeBrand() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarBrand />
      <div
        className="bg-red-200 h-screen"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1357914666/photo/shot-of-a-handsome-young-man-dancing-against-a-blue-background.webp?b=1&s=170667a&w=0&k=20&c=gcSRnjDDo7O4uNzKSELbzE0lRIMqdsmCiTNf6FHUjR4=")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-72">
          <div className="flex-col pt-36">
            <div className="uppercase text-xl text-white">
              influencer marketing platform for brand
            </div>
            <div className="w-96 text-5xl mt-5">Breath Life</div>
            <div className="w-96 text-5xl mt-3">Into Your Brand</div>

            <div className="w-[600px] text-xl mt-5">
              Get Event-Promoter's complete Influencer Marketing Platform to
              help you reach your goal faster
            </div>

            <button
              onClick={() => navigate("/brand")}
              className="text-blue-700 bg-white rounded-md px-5 py-3 mt-5 text-lg"
            >
              Add Your Brand
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeBrand;
