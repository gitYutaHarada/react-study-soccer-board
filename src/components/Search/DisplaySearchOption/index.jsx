"use client";

import SearchByArea from "@/components/Search/DisplaySearchOption/SearchByArea";
import SearchByCompetition from "@/components/Search/DisplaySearchOption/SearchByCompetition";

const DisplaySearchOption = ({ activeBtn, competitions, areas }) => {
  if (activeBtn === "competitions") {
    return <SearchByCompetition competitions={competitions} />;
  } else if (activeBtn === "area") {
    return <SearchByArea areas={areas} />;
  }
};

export default DisplaySearchOption;
