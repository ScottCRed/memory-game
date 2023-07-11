import { characters } from "./assets/characters"

const Card = () => {
    return (
        characters.map((char) => {
            return (
                <div className="card" key={char.id} id={char.id}>
                    <img src={char.src} alt={char.name}/>
                    {char.name}
                </div>
            );
        })
    );
};

export default Card;