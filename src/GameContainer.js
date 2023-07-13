import { useState } from "react";
import Cards from "./Cards";

const GameContainer = (props) => {
    const {setScore, score, heroMax, setHeroMax, characterSelect, randomCards, shuffle, setRandomCards, villainMax, setVillainMax} = props;
    
    return (
        <div className="gameContainer">
            <Cards 
            setScore={setScore} 
            score={score} 
            heroMax={heroMax}
            setHeroMax={setHeroMax}
            villainMax={villainMax}
            setVillainMax={setVillainMax}
            characterSelect={characterSelect}
            randomCards={randomCards}
            shuffle={shuffle}
            setRandomCards={setRandomCards}/>
        </div>
    );
};

export default GameContainer;