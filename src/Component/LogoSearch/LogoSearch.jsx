import React from "react";
import { ImSearch } from "react-icons/im";
import "./LogoSearch.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <div className="Search">
        <BsThreeDotsVertical className="my-auto text-xl text-[#3E3232BF]" />
        <input
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search Anything"
        />
        <div className="s-icon">
          <ImSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
