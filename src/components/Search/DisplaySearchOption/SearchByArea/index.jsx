import { useState } from "react";

const SearchByArea = ({ areas, areaIds }) => {
  const [childAreasData, setChildAreasData] = useState([]);
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
    </div>
  );
};

export default SearchByArea;
