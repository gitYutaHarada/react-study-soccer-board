import DisplayTeams from "@/components/Search/DisplayTeams";
import { useState } from "react";
const SearchByCompetition = ({ competitions, competitionCodes }) => {
  const [selectCompetition, setSelectCompetition] = useState("");
  const [selectTeams, setSelectTeams] = useState([]);

  const competitionAndCode = competitions.map((competition, i) => ({
    competition,
    code: competitionCodes[i] ?? "",
  }));

  const getAllTeams = async (code) => {
    try {
      const res = await fetch(`/api/teams?competition=${code}`);
      const data = await res.json();
      console.log(data);
      setSelectCompetition(data.competition.name);
      setSelectTeams(data.teams);
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };
  return (
    <div>
      {competitionAndCode.map(({ competition, code }) => {
        return (
          <div key={competition}>
            <button onClick={() => getAllTeams(code)}>
              {competition}::{code}
            </button>
            <br />
          </div>
        );
      })}
      {selectTeams && (
        <DisplayTeams
          selectCompetition={selectCompetition}
          selectTeams={selectTeams}
        />
      )}
    </div>
  );
};

export default SearchByCompetition;
