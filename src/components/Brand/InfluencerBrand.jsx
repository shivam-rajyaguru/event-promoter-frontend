import React, { useEffect, useState } from "react";

import { SlMagnifier } from "react-icons/sl";
import NavbarBrand from "./NavnarBrand";
import { useGlobalContext } from "../../../context/influenceContext";

function InfluencerBrand() {
  //   const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const { getAllData, influence, addInfluence, getSearchData } =
    useGlobalContext();
  const [inf, setInf] = useState({
    name: "",
    username: "",
    email: "",
    country: "",
    totalsubmission: "",
    lastsubmission: "",
  });

  useEffect(() => {
    console.log("hi");
    getAllData();
    console.log(influence);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setInf({ ...inf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavbarBrand />
      <div className="" style={{ height: "100vh" }}>
        <div className="mx-80 mt-24">
          <h2 className="text-2xl">Influencers</h2>
          <div className="flex items-center">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
                getSearchData(search);
              }}
              placeholder="Search your influencer partners..."
              className="rounded-sm p-3 w-full mt-4 bg-slate-100"
            />
            <span>
              <SlMagnifier size={25} className="-ml-10 mt-4" />
            </span>
          </div>

          <div className="flex mt-20 justify-between">
            <h3>{influence.length} Brand Influencers</h3>
            {/* <button
              type="button"
              className="bg-blue-700 text-white p-2 rounded-md px-6"
            >
              + Add Influencers
            </button> */}
          </div>

          <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-s text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center"></div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Influencers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Submission
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Submission
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {influence.map((influ, index) => {
                  return (
                    <>
                      <tr
                        className="bg-gray-50 border-b hover:bg-gray-100"
                        key={index}
                      >
                        <td className="w-4 p-4" key={influ._id}>
                          <div className="flex items-center"></div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-b;ack"
                        >
                          <div className="ps-3">
                            <div className="text-base font-semibold">
                              {influ.username}
                            </div>
                            <div className="font-normal text-gray-500">
                              {influ.name}
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">{influ.totalsubmission}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5  me-2"></div>{" "}
                            {influ.lastsubmission}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-blue-600 dark:text-blue-500 ">
                            {influ.country}
                          </div>
                        </td>
                      </tr>
                      {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center"></div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">@username</div>
                      <div className="font-normal text-gray-500">Micro tier</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">678</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 me-2"></div> February 21st, 2023
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-600 dark:text-blue-500 ">
                      February 21st, 2023
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center"></div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">@username</div>
                      <div className="font-normal text-gray-500">Micro tier</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">78</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5  me-2"></div> September 21st, 2023
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-600 dark:text-blue-500 ">
                      May 11th, 2023
                    </div>
                  </td>
                </tr> */}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerBrand;
