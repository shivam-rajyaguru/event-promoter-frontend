import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SlMagnifier } from "react-icons/sl";
import { useGlobalContext } from "../../context/influenceContext";

function Influencers() {
  const [showModal, setShowModal] = useState(false);
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
    addInfluence(
      inf.name,
      inf.username,
      inf.email,
      inf.country,
      inf.totalsubmission,
      inf.lastsubmission
    );
  };

  const onChange = (e) => {
    setInf({ ...inf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
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

            <button
              data-modal-target="crud-modal"
              data-modal-show="crud-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => setShowModal(true)}
            >
              + Add Influencers
            </button>

            {showModal && (
              <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                style={{ marginLeft: "750px", marginTop: "34px" }}
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Create New Product
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="crud-modal"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <form className="p-4 md:p-5 bg-gray-100">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            id="country"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Total Submission
                          </label>
                          <input
                            type="text"
                            name="totalsubmission"
                            id="totalsubmission"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Last Submission
                          </label>
                          <input
                            type="text"
                            name="lastsubmission"
                            id="lastsubmission"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            required=""
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleClick}
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          className="me-1 -ms-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Add new product
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
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

export default Influencers;
