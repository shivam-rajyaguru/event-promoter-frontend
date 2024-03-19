import React, { useState } from "react";
import { useBrandGlobalContext } from "../../../context/brandContext";
import avatar from "../../assets/profile.png";
import styles from "../../styles/Login.module.css";

function Display() {
  const { brands, file, logoFile } = useBrandGlobalContext();

  return (
    <>
      <div className="mt-5" style={{ width: "770px" }}>
        <div className="flex justify-center mt-12">
          <h1 className="text-xl font-mono">Get Better Marketing Display</h1>
        </div>

        <div className="mt-10">
          <div className="mx-20 bg-gray-200 rounded-2xl border-4 border-gray-300">
            {!file === "" ? (
              <div
                className="h-80 bg-gray-100 text-gray-600 font-bold text-4xl flex justify-center items-center rounded-t-2xl"
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img className="w-full h-full object-cover" src={file} alt="" />
              </div>
            ) : (
              <div>Brand Image</div>
            )}

            <div class="relative w-32 h-32 ml-10 -mt-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
              <img
                src={logoFile || avatar}
                className={styles.profile_img_logo}
                alt="avatar"
              />
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
