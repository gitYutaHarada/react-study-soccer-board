import Image from "next/image";
import Link from "next/link";

import RunningCompetitions from "@/components/Team/TeamInfo/RunningCompetitions";
import Coach from "@/components/Team/TeamInfo/Coach";
import classes from "@/components/Team/TeamInfo/teamInfo.module.css";

const TeamInfo = ({ data }) => {
  const area = data.area;
  const { name, flag } = area;
  const runningCompetitions = data.runningCompetitions;
  const coach = data.coach;
  const websiteURL = data.website;
  return (
    <>
      <div className={classes.threeContainer}>
        <div>
          <strong>area</strong>
          <p>{name}</p>
          <Image
            src={flag}
            alt="flag"
            width={100}
            height={60}
            unoptimized
          ></Image>
        </div>

        <RunningCompetitions runningCompetitions={runningCompetitions} />
        <Coach coach={coach} />
      </div>
      <div className={classes.websiteURL}>
        <span className={classes.officialSite}>official site: </span>
        <a href={websiteURL}>{websiteURL}</a>
      </div>
    </>
  );
};

export default TeamInfo;
