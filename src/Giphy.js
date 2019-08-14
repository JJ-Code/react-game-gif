import React, { Component } from "react";
import "./App.css";


class Giphy extends Component {

    render() {

        return (
            <div className="container">
                <section>
                    <div className="content" id="main-game">
                        <div className="row">
                            <h1>Step 2 - Click on giphy to match SCORE to WIN! </h1> <br /><br />
                            <div className="col-md-4">
                                <h2>Try to match</h2>
                                <h2 className="computer-score"> </h2>

                                <div></div>
                            </div>

                            <div className="col-md-4">
                                <h2>Your current score: </h2>
                                <h2 className="user-score">ggg</h2>
                            </div>
                            <div className="col-md-4">
                                <h2>Score Tracker</h2>
                                <h3>Wins: </h3>
                                <h3 className="win-score"> Placeholder </h3>

                                <h3>Losses: </h3>
                                <h3 className="loss-score">placeholder </h3>
                            </div>
                        </div>

                        {/* <!-- GIF RESULTS GAME--> */}
                        <div className="row">

                            <div id="giphy-view"></div>

                        </div>


                    </div>
                </section>

            </div>//end of 

        )


    }

}


export default Giphy; 
