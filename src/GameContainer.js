import Cards from "./Cards";

const GameContainer = (props) => {
    const {setScore, score, bestScore, setBestScore, characterSelect, randomCards} = props
    return (
        <div className="gameContainer">
            <Cards 
            setScore={setScore} 
            score={score} 
            bestScore={bestScore}
            setBestScore={setBestScore}
            characterSelect={characterSelect}
            randomCards={randomCards}/>
        </div>
    );
};

export default GameContainer;