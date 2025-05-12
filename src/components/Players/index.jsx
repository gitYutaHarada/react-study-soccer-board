import PlayerAll from "@/components/Players/PlayerAll";
import classes from "@/components/Players/player.module.css"

export default async function Players() {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/teams/86", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  const squad = data.squad || [];

  return (
    <div className={classes.container}>
      <h1 className={classes.teamName}>Real Madrid Squad</h1>
      <PlayerAll squad={squad} />
    </div>
  );
}
