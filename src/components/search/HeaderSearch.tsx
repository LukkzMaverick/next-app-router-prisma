import React from "react";
import Search from "../Search";

type Props = {};

const HeaderSearch = (props: Props) => {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <Search />
    </div>
  );
};

export default HeaderSearch;
