const SearchByArea = ({ areas }) => {
  return (
    <div>
      {areas.map((areaName) => {
        return <p key={areaName}>{areaName}</p>;
      })}
    </div>
  );
};

export default SearchByArea;
