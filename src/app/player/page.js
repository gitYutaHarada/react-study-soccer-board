import Header from "@/components/Header";
import Players from "@/components/Players";
export default function PlayerPage({ searchParams }) {
  return (
    <>
      <Header searchParams={searchParams} />
      <Players searchParams={searchParams} />
    </>
  );
}
