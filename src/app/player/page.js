"use client";

import { useSearchParams } from "next/navigation";

// import Header from "@/components/Header";
// import Players from "@/components/Players";
export default function PlayerPage() {
  const searchParams = useSearchParams();
  const teamId = searchParams.get("teamId");

  return (
    <>
      {/* <Header /> */}
      <p>{teamId}</p>
      {/* <Players /> */}
    </>
  );
}
