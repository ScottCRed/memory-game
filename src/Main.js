import Footer from "./Footer";
import GameContainer from "./GameContainer";
import Header from "./Header";

function Main () {
    return (
        <>
            <Header className="main" id="header" title="Memory Game"/>
            <GameContainer />
            <Footer className='footer' content='Created by Scott Carroll 2023'/>
        </>
    );
};

export default Main;