import PlayerAll from "@/components/Players/PlayerAll";
import classes from "@/components/Players/player.module.css";

const Players = async () => {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/teams/86", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  const squad = data.squad || [];

  return (
    <div className={classes.container}>
      <PlayerAll squad={squad} />
    </div>
  );
};

export default Players;
