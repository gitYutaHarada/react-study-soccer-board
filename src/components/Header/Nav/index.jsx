import Image from "next/image";
import Link from "next/link";
import classes from "@/components/Header/header.module.css";

const NAV_ITEMS = [
  { href: "/team", label: "Team" },
  { href: "/player", label: "Player" },
];

const Nav = async ({teamId}) => {
  {
    NAV_ITEMS.map((item) => {
      return (
        <Link
          key={item.label}
          href={`${item.href}?teamId=${teamId}`}
          className={classes.navItems}
        >
          {item.label}
        </Link>
      );
    });
  }
};

export default Nav;
