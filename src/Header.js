import Scoreboard from "./Scoreboard";

const Header = (props) => {
    const {className, title, id, currentScore, maxScore, bestScore} = props
    return (
        <div>
            <div className={className} id={id}>
                {title} 
                <Scoreboard 
                currentScore={currentScore} 
                maxScore={maxScore}
                bestScore={bestScore}/>
                </div>
            
        </div>
    )
}

export default Header;