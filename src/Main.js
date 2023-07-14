import { useState, useEffect } from "react";
import { characters } from "./characters";
import { villains } from "./villains";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import Header from "./Header";
import NavBar from "./NavBar";
import biwa from "./sounds/biwa.mp3";
import sword from "./sounds/sword.mp3"

function Main () {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(characters.length)
    const [heroMax, setHeroMax] = useState(0);
    const [villainMax, setVillainMax] = useState(0);
    const [characterSelect, setCharacterSelect] = useState(characters);
    const [randomCards, setRandomCards] = useState(characters);
    const [loading, setLoading] = useState(false);

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
        const playBiwa = new Audio(biwa);
        setCharacterSelect(villains);
        const background = document.querySelector(".gameContainer");
        background.classList.add("gameSwitch");

        setTimeout(()=> {
            playBiwa.play();
        },800);   
    };
    function setHeroes () {
        const playSword = new Audio(sword);
        setCharacterSelect(characters); 
        const background = document.querySelector(".gameContainer");
        background.classList.remove("gameSwitch");  

        setTimeout(()=> {
            playSword.play();
        }, 500)
    };

    useEffect(() => {
        shuffle(characterSelect);
        setCurrentScore(0);
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        }, 1000)
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
            heroMax={heroMax}
            villainMax={villainMax}
            characterSelect={characterSelect}/>

            <NavBar 
            setChoice={setCharacterSelect} 
            shuffle={shuffle}
            characterSelect={characterSelect}
            setVillains={setVillains}
            setHeroes={setHeroes}/>

            <GameContainer 
            setScore={setCurrentScore} 
            score={currentScore} 
            heroMax={heroMax}
            setHeroMax={setHeroMax}
            villainMax={villainMax}
            setVillainMax={setVillainMax}
            characterSelect={characterSelect}
            shuffle={shuffle}
            randomCards={randomCards}
            setRandomCards={setRandomCards}
            loading={loading}
            setLoading={setLoading}/>

            <Footer 
            className='footer' 
            content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;