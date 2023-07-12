import Scoreboard from "./Scoreboard";

const Header = (props) => {
    const {className, title, id, currentScore, maxScore} = props
    return (
        <div>
            <div className={className} id={id}>
                {title} 
                <Scoreboard 
                currentScore={currentScore} 
                maxScore={maxScore}/>
                </div>
            
        </div>
    )
}

export default Header;