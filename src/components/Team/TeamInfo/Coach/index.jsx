const Coach = ({ coach }) => {
  return (
    <div>
      <strong>coach</strong>
      <p>name: {coach.name}</p>
      <p>dateOfBirth: {coach.dateOfBirth}</p>
      <p>nationality: {coach.nationality}</p>
    </div>
  );
};

export default Coach;
