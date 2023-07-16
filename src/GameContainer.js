import { useEffect } from "react";
import Cards from "./Cards";
import { CircleLoader } from "react-spinners";

const GameContainer = (props) => {
    const {setScore, score, heroMax, setHeroMax, characterSelect, randomCards, shuffle, setRandomCards, villainMax, setVillainMax, loading, setLoading } = props;

    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        }, 4000)
    }, []);
    
    return (
        <div className="gameContainer">
            {
            loading ?
            <CircleLoader 
            size={200}
            color="white"
            loading={loading}/>
            :
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
            }
        </div>
    );
};

export default GameContainer;