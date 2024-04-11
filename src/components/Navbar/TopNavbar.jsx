import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const TopNavbar = () => {
  return (
    <div className="w-full py-2 bg-black flex gap-x-3 items-center justify-center text-white">
      <p>FREE STANDARD SHIPING WITH ADICLUB</p>
      <KeyboardArrowDownIcon className="cursor-pointer" />
    </div>
  );
};

export default TopNavbar;
