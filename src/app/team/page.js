import Header from "@/components/Header";
import Team from "@/components/Team";

export default function TeamPage({ searchParams }) {
  const teamId = searchParams.teamId;

  return (
    <>
      <Header />
      <p>{teamId}</p>
      <Team />
    </>
  );
}
