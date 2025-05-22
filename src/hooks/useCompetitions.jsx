import { useState } from "react";

const useCompetitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [competitionCodes, setCompetitionCodes] = useState([]);

  const fetchCompetitions = async () => {
    try {
      const res = await fetch("/api/competitions/");
      const data = await res.json();
      setCompetitions(data.competitions.map((item) => item.name));
      setCompetitionCodes(data.competitions.map((item) => item.code));
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };

  return {competitions, competitionCodes, fetchCompetitions}
};

export { useCompetitions };
