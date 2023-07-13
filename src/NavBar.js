import { characters } from "./characters";
import { villains } from "./villains";

const NavBar = (props) => {
    const { setChoice, shuffle } = props;

    function setVillains () {
        setChoice(villains);
        console.log('villains');
        shuffle();
    };
    function setHeroes () {
        setChoice(characters);
        console.log('heroes');
        shuffle();
    };

    return (
        <div className="navBar">
            <div>Welcome User! <br/> Get points by clicking on characters you haven't selected before!</div>
            <button onClick={setHeroes}>Heroes</button>
            <button onClick={setVillains}>Villains</button>
        </div>
    );
};

export default NavBar;