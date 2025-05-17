import TeamInfo from "@/components/Team/TeamInfo";

const Team = async ({ searchParams }) => {
  const teamId = searchParams.teamId;
  let data;
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${base}/api/team?teamId=${teamId}`);
    data = await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
  }

  return (
    <>
      <TeamInfo data={data} />
    </>
  );
};

export default Team;
