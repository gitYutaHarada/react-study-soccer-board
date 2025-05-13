const SearchByCompetition = ({competitions}) => {
  return (
    <div>
      {competitions.map((name) => {
        return <p key={name}>{name}</p>;
      })}
    </div>
  );
};

export default SearchByCompetition;
