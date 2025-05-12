import TeamInfo from "@/components/Team/TeamInfo";

const Team = async () => {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/teams/86", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  return (
    <>
      <TeamInfo data={data} />
    </>
  );
};

export default Team;
