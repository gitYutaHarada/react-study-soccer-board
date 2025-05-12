import Image from "next/image";
import Link from "next/link";
import classes from "@/components/Header/header.module.css";

const NAV_ITEMS = [
  { href: "/team", label: "Team" },
  { href: "/player", label: "Player" },
];

export default async function Header() {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/teams/86", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  const teamName = data.name;
  const imageUrl = data.crest;
  return (
    <>
      <p className={classes.teamName}>{teamName}</p>

      <header className={classes.headerContainer}>
        <Image
          src={imageUrl}
          alt="crest"
          width={100}
          height={60}
          unoptimized
        ></Image>
        {NAV_ITEMS.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.href}
              className={classes.navItems}
            >
              {item.label}
            </Link>
          );
        })}
      </header>
    </>
  );
}
