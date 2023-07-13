import { useState } from "react";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import Header from "./Header";
import { characters } from "./characters";
import NavBar from "./NavBar";

function Main () {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(characters.length)
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Header 
            className="main" 
            id="header" 
            title="Memory Game" 
            currentScore={currentScore} 
            maxScore={maxScore}
            bestScore={bestScore}/>

            <NavBar />

            <GameContainer 
            setScore={setCurrentScore} 
            score={currentScore} 
            bestScore={bestScore}
            setBestScore={setBestScore}/>

            <Footer 
            className='footer' 
            content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;