"use client";

import { useState } from "react";
import DisplaySearchOptionBtns from "@/components/Search/DisplaySearchOptionBtns";
import DisplaySearchOption from "@/components/Search/DisplaySearchOption";

const Search = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [competitionCodes, setCompetitionCodes] = useState([]);
  const [areas, setAreas] = useState([]);

  return (
    <>
      <DisplaySearchOptionBtns
        setActiveBtn={setActiveBtn}
        setCompetitions={setCompetitions}
        setCompetitionCodes={setCompetitionCodes}
        setAreas={setAreas}
      />
      <DisplaySearchOption
        activeBtn={activeBtn}
        competitions={competitions}
        competitionCodes={competitionCodes}
        areas={areas}
      />
    </>
  );
};

export default Search;
