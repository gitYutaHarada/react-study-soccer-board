import { useSelectSearchOption } from "@/hooks/useSelectSearchOption";

const DisplaySearchOptionBtns = ({
  setActiveBtn,
  setCompetitions,
  setCompetitionCodes,
  setAreas,
  setAreaIds,
}) => {
  const { competitions, competitionCodes, areas, areaIds, selectSearchOption } =
    useSelectSearchOption();

  const BTN_LIST = [{ label: "competitions" }, { label: "area" }];

  return (
    <>
      {BTN_LIST.map((btnItem) => {
        return (
          <button
            key={btnItem.label}
            onClick={() =>
              selectSearchOption(
                setActiveBtn,
                setCompetitions,
                setCompetitionCodes,
                setAreas,
                setAreaIds,
                btnItem.label
              )
            }
          >
            {btnItem.label}
          </button>
        );
      })}
    </>
  );
};

export default DisplaySearchOptionBtns;
