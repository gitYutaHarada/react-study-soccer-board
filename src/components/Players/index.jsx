import PlayerAll from "@/components/Players/PlayerAll";
import classes from "@/components/Players/player.module.css";

const Players = async () => {
  let data;
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${base}/api/player`);
    data = await res.json();
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
