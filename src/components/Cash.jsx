import React from "react";
import Navbar from "./Navbar";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

function Cash() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
        {/* style={{ height: "100vh" }} */}
        <div className="">
          <div className="mx-80 mt-24">
            <h2 className="text-2xl">Cash</h2>
            <div className="flex items-center mt-6">
              <input
                type="text"
                name=""
                id=""
                // onChange={(e) => {
                //   e.preventDefault();
                //   setSearch(e.target.value);
                //   getSearchData(search);
                // }}
                placeholder="Search your influencer partners..."
                className="rounded-sm p-3 w-full mt-4 bg-slate-100"
              />
              <span>
                <SlMagnifier size={25} className="-ml-10 mt-4" />
              </span>
            </div>
            <div className="flex mt-20 justify-between">
              {/* <h3>{influence.length} Brand Influencers</h3> */}
              {/* <button
              type="button"
              className="bg-blue-700 text-white p-2 rounded-md px-6"
            >
              + Add Influencers
            </button> */}

              <div className="flex w-48 text-xl justify-between mx-10 cursor-pointer">
                <Link to="/cash" className="hover:text-blue-500">
                  Cash
                </Link>
                <Link to="/reward" className="hover:text-blue-500">
                  Reward
                </Link>
              </div>

              <button
                data-modal-target="crud-modal"
                data-modal-show="crud-modal"
                className="block text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-14 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                type="button"
                onClick={() => navigate("/postedPay")}
              >
                Postd Pay
              </button>
            </div>
            <div className="relative overflow-x-auto mt-8 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-s text-gray-700 capitalize bg-gray-200">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center"></div>
                    </th>
                    <th scope="col" className="p-4">
                      <div className="flex items-center"> </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Influencers
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last paid amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total amount paid
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transactions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {influence.map((influ, index) => { */}
                  {/* return ( */}
                  <>
                    <tr className="bg-gray-50 border-b hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center"></div>
                      </td>

                      <td
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-b;ack"
                      >
                        {/* {influ.totalsubmission} */}
                        <div className="pt-4">
                          <input type="checkbox" name="" id="" />
                        </div>
                      </td>
                      <td>
                        <div className="ps-3 flex flex-row">
                          <div class="relative w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
                            <svg
                              class="absolute w-30 h-30 text-gray-400 -left-1"
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
                          <div className="flex flex-col">
                            <div className="text-base font-semibold">
                              {/* {influ.username} */}
                              @shiva_guru
                            </div>
                            <div className="font-normal text-gray-500">
                              {/* {influ.name} */}
                              Shivam Rajyaguru
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 me-2"></div>
                          <div className="  text-gray-600 px-2">
                            $50.00
                            <br />
                            <span className="-ml-4 text-blue-500 text-base underline">
                              <a href="#">see details</a>
                            </span>
                          </div>
                          {/* {influ.lastsubmission} */}
                        </div>
                      </td>
                      <td className="px-14 py-4">$425.00</td>
                      <td className="px-14 py-4">42</td>

                      <td className="px-10 py-4">
                        <div className="font-medium text-blue-600 dark:text-blue-500 ">
                          {/* {influ.country} */}
                          <a href="#">
                            <MdOutlineMessage size={28} />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center"></div>
                      </td>

                      <td
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-b;ack"
                      >
                        {/* {influ.totalsubmission} */}
                        <div className="pt-4">
                          <input type="checkbox" name="" id="" />
                        </div>
                      </td>
                      <td>
                        <div className="ps-3 flex flex-row">
                          <div class="relative w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
                            <svg
                              class="absolute w-30 h-30 text-gray-400 -left-1"
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
                          <div className="flex flex-col">
                            <div className="text-base font-semibold">
                              {/* {influ.username} */}
                              @robert_d_JR
                            </div>
                            <div className="font-normal text-gray-500">
                              {/* {influ.name} */}
                              Robert Downey Jr
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 me-2"></div>
                          <div className="  text-gray-600 px-2">
                            $67.00
                            <br />
                            <span className="-ml-4 text-blue-500 text-base underline">
                              <a href="#">see details</a>
                            </span>
                          </div>
                          {/* {influ.lastsubmission} */}
                        </div>
                      </td>
                      <td className="px-14 py-4">$527.00</td>
                      <td className="px-14 py-4">49</td>

                      <td className="px-10 py-4">
                        <div className="font-medium text-blue-600 dark:text-blue-500 ">
                          {/* {influ.country} */}
                          <a href="#">
                            <MdOutlineMessage size={28} />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center"></div>
                      </td>

                      <td
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-b;ack"
                      >
                        {/* {influ.totalsubmission} */}
                        <div className="pt-4">
                          <input type="checkbox" name="" id="" />
                        </div>
                      </td>
                      <td>
                        <div className="ps-3 flex flex-row">
                          <div class="relative w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
                            <svg
                              class="absolute w-30 h-30 text-gray-400 -left-1"
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
                          <div className="flex flex-col">
                            <div className="text-base font-semibold">
                              {/* {influ.username} */}
                              @m_sitlani
                            </div>
                            <div className="font-normal text-gray-500">
                              {/* {influ.name} */}
                              Malvika Sitlani
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 me-2"></div>
                          <div className="  text-gray-600 px-2">
                            $78.00
                            <br />
                            <span className="-ml-4 text-blue-500 text-base underline">
                              <a href="#">see details</a>
                            </span>
                          </div>
                          {/* {influ.lastsubmission} */}
                        </div>
                      </td>
                      <td className="px-14 py-4">$612.00</td>
                      <td className="px-14 py-4">53</td>

                      <td className="px-10 py-4">
                        <div className="font-medium text-blue-600 dark:text-blue-500 ">
                          {/* {influ.country} */}
                          <a href="#">
                            <MdOutlineMessage size={28} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cash;
