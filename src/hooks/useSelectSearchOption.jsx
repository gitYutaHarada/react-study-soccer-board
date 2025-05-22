import { UseAreas } from "@/hooks/useAreas";
import { useCompetitions } from "@/hooks/useCompetitions";

const useSelectSearchOption = () => {
  const { competitions, competitionCodes, fetchCompetitions } =
    useCompetitions();
  const { areas, areaIds, fetchAreas } = UseAreas();
  const selectSearchOption = async (
    setActiveBtn,
    setCompetitions,
    setCompetitionCodes,
    setAreas,
    setAreaIds,
    label
  ) => {
    setActiveBtn(label);

    if (label === "competitions") {
      await fetchCompetitions();
      setCompetitions(competitions);
      setCompetitionCodes(competitionCodes);
    } else if (label === "area") {
      await fetchAreas();
      setAreas(areas);
      setAreaIds(areaIds);
    }
  };
  return {
    competitions,
    competitionCodes,
    areas,
    areaIds,
    selectSearchOption,
  };
};

export { useSelectSearchOption };
