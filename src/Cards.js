import { useEffect, useState } from "react";
import { characters } from "./characters"
import Card from "./Card";

const Cards = (props) => {
    const { id, onClick, src, name} = props
    const [randomCards, setRandomCards] = useState(characters);
    const [clickedCards, setClickedCards] = useState([]);

    const checkClick = (e) => {
        const target = e.target.id;
        if (!clickedCards.includes(target)) {
            setClickedCards(clickedCards.concat(target));
            console.log(clickedCards);
            shuffle();
        }
        else {
            setClickedCards([]);
            console.log('card already clicked');
        }
    }

    function shuffle() {
        const shuffledCards = [...characters];
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