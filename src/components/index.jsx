import Header from "@/components/Header";
import Players from "@/components/Players";

const Components = async () => {
      const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/teams/86", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  const imageUrl = data.crest;
  const squad = data.squad || [];
  return (
    <>
    <Header imageUrl={imageUrl}/>
    <Players squad={squad}/>
    </>

  );
};

export default Components;
