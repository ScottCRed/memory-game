import { useState } from "react";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import Header from "./Header";
import { characters } from "./characters";
import { villains } from "./villains";
import NavBar from "./NavBar";
import { useEffect } from "react";

function Main () {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(characters.length)
    const [bestScore, setBestScore] = useState(0);
    const [characterSelect, setCharacterSelect] = useState(characters);
    const [randomCards, setRandomCards] = useState(characters);

    const shuffle = (array) => {
        const shuffledCards = [...array];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
      }
       setRandomCards(shuffledCards);
       console.log("shuflled");

    };

    function setVillains () {
        setCharacterSelect(villains);
    };
    function setHeroes () {
        setCharacterSelect(characters);   
    };

    useEffect(() => {
        shuffle(characterSelect);
      }, [characterSelect]);

    useEffect(() => {
        shuffle(characters);
    }, []);

    return (
        <>
            <Header 
            className="main" 
            id="header" 
            title="Memory Game" 
            currentScore={currentScore} 
            maxScore={maxScore}
            bestScore={bestScore}/>

            <NavBar 
            setChoice={setCharacterSelect} 
            shuffle={shuffle}
            characterSelect={characterSelect}
            setVillains={setVillains}
            setHeroes={setHeroes}/>

            <GameContainer 
            setScore={setCurrentScore} 
            score={currentScore} 
            bestScore={bestScore}
            setBestScore={setBestScore}
            characterSelect={characterSelect}
            shuffle={shuffle}
            randomCards={randomCards}
            setRandomCards={setRandomCards}/>

            <Footer 
            className='footer' 
            content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;