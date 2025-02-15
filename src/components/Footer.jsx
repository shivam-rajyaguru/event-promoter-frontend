import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-100 flex py-5 border-t-3 border-gray-100 text-lg pl-72 w-full text-gray-700 h inset-x-3 h-20 fixed bottom-0">
      Copyright{" "}
      <span>
        <FaRegCopyright size={30} className="pl-2" />
      </span>{" "}
      2024. All Rights Reserved by Event-Promoter
    </footer>
  );
}

export default Footer;
