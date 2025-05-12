import PlayerInfo from "@/components/Players/PlayerAll/PlayerInfo";
import classes from "@/components/Players/PlayerAll/playerAll.module.css";

export default async function PlayerAll({ squad }) {
  let i = 0;
  return (
    <div>
      {squad.length === 0 ? (
        <p>No players found.</p>
      ) : (
        <ul className={classes.teamContainer}>
          {squad.map((player) => {
            i++;
            if (i % 4 === 0) {
              return (
                  <PlayerInfo key={player.id} player={player} />
              );
            } else {
              return <PlayerInfo key={player.id} player={player} />;
            }
          })}
        </ul>
      )}
    </div>
  );
}
