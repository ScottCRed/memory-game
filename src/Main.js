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
    const [randomCards, setRandomCards] = useState(characterSelect);

    function shuffle() {
        const shuffledCards = [...characterSelect];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
      }
      setRandomCards(shuffledCards);
      console.log("shuflled");
    };

    useEffect(() => {
        shuffle();
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
            shuffle={shuffle}/>

            <GameContainer 
            setScore={setCurrentScore} 
            score={currentScore} 
            bestScore={bestScore}
            setBestScore={setBestScore}
            characterSelect={characterSelect}
            shuffle={shuffle}
            randomCards={randomCards}/>

            <Footer 
            className='footer' 
            content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;