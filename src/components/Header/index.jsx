import Image from "next/image";
import Link from "next/link";
import classes from "@/components/Header/header.module.css";

const NAV_ITEMS = [
  { href: "/team", label: "Team" },
  { href: "/player", label: "Player" },
];

export default async function Header({ teamId }) {
  let data;
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${base}/api/team?teamId=${teamId}`);
    data = await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
  }
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
