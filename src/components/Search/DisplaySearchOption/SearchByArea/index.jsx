import SearchByCompetition from "@/components/Search/DisplaySearchOption/SearchByCompetition";
import { useState } from "react";

const SearchByArea = ({ areas, areaIds }) => {
  const [childAreasData, setChildAreasData] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [competitionCodes, setCompetitionCodes] = useState([]);
  const areaNameAndAreaId = areas.map((area, index) => ({
    area,
    areaId: areaIds[index],
  }));

  const handleButton = async (areaId) => {
    try {
      const res = await fetch(`/api/teams/area?areaId=${areaId}`);
      const data = await res.json();
      setChildAreasData(data.childAreas);
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };

  const handleChildArea = async (childId) => {
    try {
      const res = await fetch(`/api/teams/childArea?childId=${childId}`);
      const data = await res.json();
      console.log(data);
      if (data.count > 0) {
        setCompetitions(data.competitions.map((item) => item.name));
        setCompetitionCodes(data.competitions.map((item) => item.code));
      }
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };
  return (
    <div>
      {areaNameAndAreaId.map(({ area, areaId }) => {
        return (
          <button key={area} onClick={() => handleButton(areaId)}>
            {area}::{areaId}
          </button>
        );
      })}
      {childAreasData.length > 0 &&
        childAreasData.map(({ name, id }) => {
          return (
            <button key={name} onClick={() => handleChildArea(id)}>
              {name}::{id}
            </button>
          );
        })}
      {competitions.length > 0 && (
        <SearchByCompetition
          competitions={competitions}
          competitionCodes={competitionCodes}
        />
      )}
    </div>
  );
};

export default SearchByArea;
