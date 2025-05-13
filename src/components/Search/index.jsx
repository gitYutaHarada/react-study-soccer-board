"use client";

import { useState } from "react";
import DisplaySearchOptionBtns from "@/components/Search/DisplaySearchOptionBtns";
import DisplaySearchOption from "@/components/Search/DisplaySearchOption";

const Search = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [competitions, setCompetitions] = useState([]);

  return (
    <>
      <DisplaySearchOptionBtns
        setActiveBtn={setActiveBtn}
        setCompetitions={setCompetitions}
      />
      <DisplaySearchOption activeBtn={activeBtn} competitions={competitions} />
    </>
  );
};

export default Search;
