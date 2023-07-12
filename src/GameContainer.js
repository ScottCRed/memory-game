import Cards from "./Cards";

const GameContainer = (props) => {
    const {setScore, score} = props
    return (
        <div className="gameContainer">
            <Cards setScore={setScore} score={score} />
        </div>
    );
};

export default GameContainer;