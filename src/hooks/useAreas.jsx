import { useState } from "react";

const UseAreas = () => {
  const [areas, setAreas] = useState([]);
  const [areaIds, setAreaIds] = useState([]);

  const fetchAreas = async () => {
    try {
      const res = await fetch("/api/areas");
      const data = await res.json();
      let areasTemp = [];
      let areaIdsTemp = [];
      data.areas.forEach((area) => {
        if (area.parentArea != null && !areasTemp.includes(area.parentArea)) {
          areasTemp = [...areasTemp, area.parentArea];
          areaIdsTemp = [...areaIdsTemp, area.parentAreaId];
        }
      });

      setAreas(areasTemp);
      setAreaIds(areaIdsTemp);
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };

  return {areas, areaIds, fetchAreas};
};

export { UseAreas };
