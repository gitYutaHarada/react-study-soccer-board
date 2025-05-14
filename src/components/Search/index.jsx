"use client";

import { useState } from "react";
import DisplaySearchOptionBtns from "@/components/Search/DisplaySearchOptionBtns";
import DisplaySearchOption from "@/components/Search/DisplaySearchOption";

const Search = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [areas, setAreas] = useState([]);

  return (
    <>
      <DisplaySearchOptionBtns
        setActiveBtn={setActiveBtn}
        setCompetitions={setCompetitions}
        setAreas={setAreas}
      />
      <DisplaySearchOption
        activeBtn={activeBtn}
        competitions={competitions}
        areas={areas}
      />
    </>
  );
};

export default Search;
