import { useState } from "react";
import Cards from "./Cards";

const GameContainer = (props) => {
    const {setScore, score, bestScore, setBestScore, characterSelect, randomCards, shuffle, setRandomCards} = props;
    
    return (
        <div className="gameContainer">
            <Cards 
            setScore={setScore} 
            score={score} 
            bestScore={bestScore}
            setBestScore={setBestScore}
            characterSelect={characterSelect}
            randomCards={randomCards}
            shuffle={shuffle}
            setRandomCards={setRandomCards}/>
        </div>
    );
};

export default GameContainer;