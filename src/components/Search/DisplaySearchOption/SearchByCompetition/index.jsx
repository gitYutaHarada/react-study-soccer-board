const SearchByCompetition = ({ competitions, competitionCodes }) => {
  const competitionAndCode = competitions.map((competition, i) => ({
    competition,
    code: competitionCodes[i] ?? "",
  }));

  const getAllTeams = async (competitionCode) => {
    console.log(competitionCode);
    try {
      const res = await fetch(`/api/teams?competition=${competitionCode}`);
      const data = await res.json();
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };
  return (
    <div>
      {competitionAndCode.map((competition, code) => {
        return (
          <div key={competition}>
            <button onClick={() => getAllTeams(code)}>
              {competition}::{code}
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default SearchByCompetition;
