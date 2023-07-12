import { useEffect, useState } from "react";
import { characters } from "./characters"

const Card = () => {
    const [randomCards, setRandomCards] = useState(characters);
    const [clickedCards, setClickedCards] = useState([]);

    const checkClick = (e) => {
        console.log(e.target.id);
        setClickedCards(clickedCards.concat(e.target.id));
        console.log(clickedCards);
        shuffle();
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
                <div className="card" key={char.id} id={char.id} onClick={checkClick}>
                    <img src={char.src} alt={char.name} id={char.id}/>
                    {char.name}
                </div>
            );
        })
    );
};

export default Card;