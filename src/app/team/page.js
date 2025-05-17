import Header from "@/components/Header";
import Team from "@/components/Team";

export default function TeamPage({ searchParams }) {
  return (
    <>
      <Header searchParams={searchParams} />
      <Team searchParams={searchParams} />
    </>
  );
}
