import classes from "@/components/Players/PlayerAll/PlayerInfo/playerInfo.module.css";

export default async function PlayerInfo({ player }) {
  const { name, position, dateOfBirth, nationality } = player;

  return (
    <div>
      <li className={classes.player}>
        <p className={classes.playerName}>{name}</p>
        <p>{position}</p>
        <p>
          Birthday:
          {new Date(dateOfBirth).toLocaleDateString()}
        </p>
        <p>{nationality}</p>
      </li>
    </div>
  );
}
