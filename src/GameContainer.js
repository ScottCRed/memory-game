import Cards from "./Cards";

const GameContainer = (props) => {
    const {setScore, score, bestScore, setBestScore} = props
    return (
        <div className="gameContainer">
            <Cards 
            setScore={setScore} 
            score={score} 
            bestScore={bestScore}
            setBestScore={setBestScore}/>
        </div>
    );
};

export default GameContainer;