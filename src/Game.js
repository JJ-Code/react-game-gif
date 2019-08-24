import React, { Component } from "react";
import "./App.css";
import axios from "axios"


class Game extends Component {
constructor(props){
    super(props);
    this.state = {

    }





    

}

    // const url = "https://api.giphy.com/v1/gifs/search?q="
    // const inputField = document.querySelector("#giphy-input");
    // const apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";




  performSearch = (props = "example") => {
    //console.log(this.props)
    let wordSearch = this.props.word
    axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordSearch}?key=84b98cb2-2053-4c97-9062-34a7f5632399`).then(response => {
      //console.log(response);
      console.log(response.data[0].shortdef[0]);
      return this.setState({
        clueResults: response.data[0].shortdef[0]
      });

    }).catch(err => {
      console.log('Error happened during fetching!', err);
    });

    console.log("clicked clicked BYE");
  };

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
