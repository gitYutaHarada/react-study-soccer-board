import PlayerAll from "@/components/Players/PlayerAll";
import classes from "@/components/Players/player.module.css";

const Players = ({ squad }) => {
  return (
    <div className={classes.container}>
      <PlayerAll squad={squad} />
    </div>
  );
};

export default Players;
