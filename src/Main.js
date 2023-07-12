import { useState } from "react";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import Header from "./Header";
import { characters } from "./characters";

function Main () {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(characters.length)

    return (
        <>
            <Header 
            className="main" 
            id="header" 
            title="Memory Game" 
            currentScore={currentScore} 
            maxScore={maxScore}/>

            <GameContainer />
            
            <Footer 
            className='footer' 
            content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;