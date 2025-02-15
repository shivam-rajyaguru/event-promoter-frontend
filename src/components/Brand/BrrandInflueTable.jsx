import React from "react";

function BrrandInflueTable(props) {
  const { header } = props;
  return (
    <>
      <div className="bg-gray-200 border border-gray-400 w-96 rounded-xl">
        <div className="flex my-3 pl-6">
          <div>Top {header} Influencers</div>
        </div>
        <hr class="h-px my-3 bg-gray-400 border-0"></hr>
        <div className="ps-3 py-4 px-6 flex flex-row">
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
        <div className="ps-3 p-4  flex flex-row">
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
        <div className="ps-3 p-4  flex flex-row">
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
        <div className="ps-3 p-4  flex flex-row">
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
        <div className="ps-3 p-4  flex flex-row">
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
      </div>
    </>
  );
}

export default BrrandInflueTable;
