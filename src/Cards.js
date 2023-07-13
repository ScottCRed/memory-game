import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    const {
        setScore, 
        score, 
        bestScore, 
        setBestScore, 
        characterSelect, 
        shuffle, 
        randomCards } = props

    const [clickedCards, setClickedCards] = useState([]);

    function newBest () {
        const result = score + 1
        if (result > bestScore) {
            setBestScore(result);
        }
    }

    const checkClick = (e) => {
        const target = e.target.id;
        if (!clickedCards.includes(target)) {
            newBest();
            setClickedCards(clickedCards.concat(target));
            setScore((prevScore) => prevScore+1);
            shuffle(characterSelect);
        }
        else {
            setClickedCards([]);
            setScore(0);
            console.log('card already clicked');
        }
    };

    return (
        randomCards.map((char) => {
            return (
                <div key={char.id}>
                    <Card 
                    id={char.id} 
                    onClick={checkClick} 
                    src={char.src} 
                    name={char.name}/>
                </div>
            );
        })
    );
};

export default Cards;