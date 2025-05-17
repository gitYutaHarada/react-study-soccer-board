import PlayerAll from "@/components/Players/PlayerAll";
import classes from "@/components/Players/player.module.css";

const Players = async ({ searchParams }) => {
  const { teamId } = await searchParams;
  let data;
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${base}/api/team?teamId=${teamId}`);
    data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("API fetch error:", err);
  }
  const squad = data.squad || [];

  return (
    <div className={classes.container}>
      <PlayerAll squad={squad} />
    </div>
  );
};

export default Players;
