
function Scoreboard (props) {
    const {currentScore, maxScore, bestScore} = props
    return (
        <>
        <div className="scoreBoard">
            <p><u>Scoreboard</u></p>
            <p>Best Score <span>{bestScore}</span></p>
            <p>Current Score <span>{currentScore}</span></p>
            <p>Max Score <span>{maxScore}</span></p>
        </div>
        </>
    );
};

export default Scoreboard;