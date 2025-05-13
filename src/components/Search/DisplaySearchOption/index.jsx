"use client";

import SearchByArea from "@/components/Search/DisplaySearchOption/SearchByArea";
import SearchByCompetition from "@/components/Search/DisplaySearchOption/SearchByCompetition";

const DisplaySearchOption = ({ activeBtn, competitions}) => {
  if (activeBtn === "competitions") {
    return <SearchByCompetition competitions={competitions}/>;
  } else if (activeBtn === "area") {
    return <SearchByArea />;
  }
};

export default DisplaySearchOption;
