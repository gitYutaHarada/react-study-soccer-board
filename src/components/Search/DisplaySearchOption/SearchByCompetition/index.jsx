const SearchByCompetition = ({competitions}) => {
  return (
    <div>
      {competitions.map((name) => {
        return (
          <>
            <button key={name}>{name}</button>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default SearchByCompetition;
