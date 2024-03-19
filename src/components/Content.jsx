import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SlMagnifier } from "react-icons/sl";
import { useGlobalContext } from "../../context/influenceContext";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import video from "../assets/video.mp4";

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
          <div className="flex justify-between">
            <h2 className="text-3xl font-medium">Brand Content</h2>
            <div className="flex">
              <span>
                <FaRegEdit size={25} />
              </span>
              <h3 className="text-lg pl-2"> Content Manager</h3>
            </div>
          </div>

          <div className="relative overflow-x-auto mt-24 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-s text-gray-700 capitalize bg-gray-200">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center"></div>
                  </th>
                  <th scope="col" className="p-4">
                    <div className="flex items-center"> Content</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Influencers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time submitted
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pending status
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
                      <div>
                        <video
                          width="150"
                          height="150"
                          src={video}
                          type="video/mp4"
                          controls
                        ></video>
                      </div>
                    </td>
                    <td>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {/* {influ.username} */}
                          @shiva_guru
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {influ.name} */}
                          Shivam Rajyaguru
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {/* {influ.totalsubmission} */}
                      Thursday, Apr 15,2023 2:27 PM
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5  me-2"></div>
                        <div className="bg-green-600 rounded-md text-white p-2 px-4">
                          (10) days to review
                          <br />
                          <span className="pl-6">
                            <a href="#">see details</a>
                          </span>
                        </div>
                        {/* {influ.lastsubmission} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
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
                      <div>
                        <video
                          width="150"
                          height="150"
                          src={video}
                          type="video/mp4"
                          controls
                        ></video>
                      </div>
                    </td>
                    <td>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {/* {influ.username} */}
                          @shiva_guru
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {influ.name} */}
                          Shivam Rajyaguru
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {/* {influ.totalsubmission} */}
                      Thursday, Apr 15,2023 2:27 PM
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5  me-2"></div>
                        <div className="bg-yellow-500 rounded-md text-white p-2 px-4">
                          (5) days to review
                          <br />
                          <span className="pl-6">
                            <a href="#">see details</a>
                          </span>
                        </div>
                        {/* {influ.lastsubmission} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
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
                      <div>
                        <video
                          width="150"
                          height="150"
                          src={video}
                          type="video/mp4"
                          controls
                        ></video>
                      </div>
                    </td>
                    <td>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {/* {influ.username} */}
                          @shiva_guru
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {influ.name} */}
                          Shivam Rajyaguru
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {/* {influ.totalsubmission} */}
                      Thursday, Apr 15,2023 2:27 PM
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5  me-2"></div>
                        <div className="bg-green-600 rounded-md text-white p-2 px-4">
                          (10) days to review
                          <br />
                          <span className="pl-6">
                            <a href="#">see details</a>
                          </span>
                        </div>
                        {/* {influ.lastsubmission} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
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
                      <div>
                        <video
                          width="150"
                          height="150"
                          src={video}
                          type="video/mp4"
                          controls
                        ></video>
                      </div>
                    </td>
                    <td>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {/* {influ.username} */}
                          @shiva_guru
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {influ.name} */}
                          Shivam Rajyaguru
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {/* {influ.totalsubmission} */}
                      Thursday, Apr 15,2023 2:27 PM
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5  me-2"></div>
                        <div className="bg-red-700 rounded-md text-white p-2 px-4">
                          (3) days to review
                          <br />
                          <span className="pl-6">
                            <a href="#">see details</a>
                          </span>
                        </div>
                        {/* {influ.lastsubmission} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
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
                      <div>
                        <video
                          width="150"
                          height="150"
                          src={video}
                          type="video/mp4"
                          controls
                        ></video>
                      </div>
                    </td>
                    <td>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {/* {influ.username} */}
                          @shiva_guru
                        </div>
                        <div className="font-normal text-gray-500">
                          {/* {influ.name} */}
                          Shivam Rajyaguru
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {/* {influ.totalsubmission} */}
                      Thursday, Apr 15,2023 2:27 PM
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5  me-2"></div>
                        <div className="bg-red-700 rounded-md text-white p-2 px-4">
                          (3) days to review
                          <br />
                          <span className="pl-6">
                            <a href="#">see details</a>
                          </span>
                        </div>
                        {/* {influ.lastsubmission} */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
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
  );
}

export default Influencers;
