import classes from "@/components/Team/TeamInfo/RunningCompetitions/RunningCompetitions.module.css"

const RunningCompetitions = ({ runningCompetitions }) => {
   return (
    <div className={classes.runningCompetitions}>
      <strong>runningCompetitions</strong>
      {runningCompetitions.map((item) => {
        return <p key={item.name}>{item.name}</p>
      })}
    </div>
  );
};

export default RunningCompetitions;
