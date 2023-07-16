import { useState } from "react";
import intro from "./sounds/intro.mp3"

const Welcome = (props) => {
    const { setUserName} = props;
    const [ input, setInput ] = useState('');

    function handleUserName (e) {
        setInput(e.target.value);
    }

    function handleSubmit (e) {
        const playIntro = new Audio(intro);
        e.preventDefault();
        setUserName(input);
        playIntro.play();
    }
    return (
        <div className="welcome">
            <h2>Please Enter Your Name:</h2>
            <input 
            type="text" 
            id="userName" 
            placeholder="User Name..." 
            className="userName" 
            onChange={handleUserName} 
            value={input}/>

            <button 
            type="submit" 
            onClick={handleSubmit}>
                Submit Name
                </button>
        </div>
    )
}

export default Welcome;