const DisplaySearchOptionBtns = ({
  setActiveBtn,
  setCompetitions,
  setCompetitionCodes,
  setAreas,
}) => {
  const BTN_LIST = [{ label: "competitions" }, { label: "area" }];

  const handleButton = async (label) => {
    setActiveBtn(label);

    if (label === "competitions") {
      try {
        const res = await fetch("/api/competitions");
        const data = await res.json();
        setCompetitions(data.competitions.map((item) => item.name));
        setCompetitionCodes(data.competitions.map((item) => item.code));
      } catch (err) {
        console.error("API fetch error:", err);
      }
    } else if (label === "area") {
      try {
        const res = await fetch("/api/areas");
        const data = await res.json();
        let areas = [];
        data.areas.forEach((area) => {
          if (!areas.includes(area.parentArea)) {
            areas = [...areas, area.parentArea];
          }
        });
        setAreas(areas);
      } catch (err) {
        console.error("API fetch error:", err);
      }
    }
  };

  const selectSearchOption = (label) => {
    setActiveBtn(label);
    handleButton(label);
  };

  return (
    <>
      {BTN_LIST.map((btnItem) => {
        return (
          <button
            key={btnItem.label}
            onClick={() => selectSearchOption(btnItem.label)}
          >
            {btnItem.label}
          </button>
        );
      })}
    </>
  );
};

export default DisplaySearchOptionBtns;
