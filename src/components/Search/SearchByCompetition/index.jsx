const SearchByCompetition = async () => {
  const token = process.env.FOOTBALL_DATA_API_TOKEN;
S;
  return (
    <div>
      {conpetitionNames.map((name) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};

export default SearchByCompetition;
