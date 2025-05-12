const SearchByArea = async () => {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
  const res = await fetch("https://api.football-data.org/v4/competitions", {
    headers: { "X-Auth-Token": token },
  });
  const data = await res.json();
  const competitions = data.competitions;
  let conpetitionNames = [];
  competitions.map((item) => {
    const name = item.name;
    conpetitionNames = [...conpetitionNames, name];
  })
  return (
    <div>
      {conpetitionNames.map((name) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};

export default SearchByArea;
