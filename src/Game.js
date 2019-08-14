import React, { Component } from "react";
import "./App.css";


class Game extends Component {



    render() {


        return (

            <div className="landing--container">
                <div className="landing--title">
                    <h1>Giphy GAME TIME!</h1>
                    <p>Step 1: Enter a word</p><br />
                    <div id="search-area">
                        <form id="giphy-form">

                            <input type="text" id="giphy-input" /><br /> <br />

                            <input class="primary-btn" id="submit-giphy" type="submit" value="Submit" onclick="jumpto('main-game');" />
                        </form>
                    </div>
                </div>
            </div> //end of container 
        )//end of return 
    }
}


export default Game; 
