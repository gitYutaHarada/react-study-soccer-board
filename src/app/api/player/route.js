import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'No token set' }, { status: 500 });
  }

  const res = await fetch('https://api.football-data.org/v4/teams/86', {
    headers: { 'X-Auth-Token': token },
  });
  if (!res.ok) {
    return NextResponse.json({ error: 'API error' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
