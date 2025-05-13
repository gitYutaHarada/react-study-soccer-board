const DisplaySearchOptionBtns = ({ setActiveBtn, setCompetitions }) => {
  const BTN_LIST = [{ label: "competitions" }, { label: "area" }];

  const handleButton = async (label) => {
    setActiveBtn(label);

    if (label === "competitions") {
      try {
        const res = await fetch("/api/competitions");
        const data = await res.json();
        setCompetitions(data.competitions.map((item) => item.name));
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
