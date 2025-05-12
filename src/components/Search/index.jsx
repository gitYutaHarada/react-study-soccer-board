"use client";

import { useState } from "react";
import SearchByCompetition from "@/components/Search/SearchByCompetition";
import SearchByArea from "@/components/Search/SearchByArea";

const Search = () => {
  const BTN_LIST = [{ label: "competition" }, { label: "area" }];
  const [activeBtn, setActiveBtn] = useState("");


  const handleButton = async (btnLabel) => {
    setActiveBtn(btnLabel);
    if (btnLabel === "competition") {
      const res = await fetch("https://api.football-data.org/v4/competitions", {
        headers: { "X-Auth-Token": token },
      });
      const data = await res.json();

      const competitions = data.competitions;
      let conpetitionNames = [];
      competitions.map((item) => {
        const name = item.name;
        conpetitionNames = [...conpetitionNames, name];
      });
    }
  };

  return (
    <>
      {BTN_LIST.map((btn) => {
        return (
          <button key={btn.label} onClick={() => handleButton(btn.label)}>
            {btn.label}
          </button>
        );
      })}
      {activeBtn === "competition" && <SearchByCompetition />}
      {activeBtn === "area" && <SearchByArea />}
    </>
  );
};

export default Search;
