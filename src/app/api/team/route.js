import { NextResponse } from "next/server";

export async function GET(request) {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("teamId");
  if (!token) {
    return NextResponse.json({ error: "No token set" }, { status: 500 });
  }

  const res = await fetch(
    `http://api.football-data.org/v4/teams/${teamId}`,
    {
      headers: { "X-Auth-Token": token },
    }
  );
  if (!res.ok) {
    return NextResponse.json({ error: "API error" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
