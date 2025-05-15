"use client";

import SearchByArea from "@/components/Search/DisplaySearchOption/SearchByArea";
import SearchByCompetition from "@/components/Search/DisplaySearchOption/SearchByCompetition";

const DisplaySearchOption = ({
  activeBtn,
  competitions,
  competitionCodes,
  areas,
}) => {
  if (activeBtn === "competitions") {
    return (
      <SearchByCompetition
        competitions={competitions}
        competitionCodes={competitionCodes}
      />
    );
  } else if (activeBtn === "area") {
    return <SearchByArea areas={areas} />;
  }
};

export default DisplaySearchOption;
