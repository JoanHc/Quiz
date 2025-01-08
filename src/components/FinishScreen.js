function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const porcentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (porcentage === 100) emoji = "🥇";
  if (porcentage >= 80 && porcentage < 100) emoji = "🎉";
  if (porcentage >= 50 && porcentage < 80) emoji = "🙃";
  if (porcentage >= 0 && porcentage < 50) emoji = "🤨";
  if (porcentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(porcentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
