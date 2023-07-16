const NavBar = (props) => {
    const { setVillains, setHeroes, userName} = props;

    return (
        <div className="navBar">
            <div>Welcome {userName}! <br/> Get points by clicking on characters you haven't selected before!</div>
            <button onClick={setHeroes}>Heroes</button>
            <button onClick={setVillains}>Villains</button>
        </div>
    );
};

export default NavBar;