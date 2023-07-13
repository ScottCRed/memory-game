import Scoreboard from "./Scoreboard";

const Header = (props) => {
    const {className, title, id, currentScore, maxScore, heroMax, villainMax, characterSelect} = props
    return (
        <div>
            <div className={className} id={id}>
                {title} 
                <Scoreboard 
                currentScore={currentScore} 
                maxScore={maxScore}
                heroMax={heroMax}
                villainMax={villainMax}
                characterSelect={characterSelect}/>
                </div>
            
        </div>
    )
}

export default Header;