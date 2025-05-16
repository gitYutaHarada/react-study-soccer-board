"use client";

import Link from "next/link";

const DisplayTeams = ({ selectCompetition, selectTeams }) => {
  const selectTeam = (team) => {
    console.log(team.id);
  };
  return (
    <div>
      <div>{selectCompetition}</div>
      {selectTeams.map((team) => {
        return (
          <Link
            key={team.id}
            href={{
              pathname: "/player",
              query: { teamId: team.id },
            }}
            // replace や scroll オプションもここで指定可
          >
            {team.name}
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayTeams;
