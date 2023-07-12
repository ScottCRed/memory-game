
function Scoreboard (props) {
    const {currentScore, maxScore} = props
    return (
        <>
        <div className="scoreBoard">
            <p><u>Scoreboard</u></p>
            <p>Current Score <span>{currentScore}</span></p>
            <p>Max Score <span>{maxScore}</span></p>
        </div>
        </>
    );
};

export default Scoreboard;