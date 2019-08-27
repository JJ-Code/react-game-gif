import React, { Component } from "react";
import "./App.css";
import axios from "axios"
import Giphy from "./Giphy";
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchGiphy: "",
      gameCard: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myDivToFocus = React.createRef(this);
  }

  // const url = "https://api.giphy.com/v1/gifs/search?q="
  // const inputField = document.querySelector("#giphy-input");
  // const apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";
  jumpto(evt) {
    //.current is verification that your element has rendered
    //document.querySelector('main-game');
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }

  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    console.log(evt)
    evt.preventDefault();
    this.performSearch(evt);
    this.jumpto(evt)
  }


  performSearch = (wordSearch = "example") => {
    console.log(wordSearch)
    let query = wordSearch;
    let url = "https://api.giphy.com/v1/gifs/search?q="

    let apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";
    axios.get(`${url}${query}${apiKey}`).then(response => {
      console.log(response);
      // let results = response.data;
      // for (let i = 0; i < results.length; i++) {
      //     let gifObj = {
      //         url: results[i].images.original.url,
      //         id: results[i].id,
      //         pts: 0
      //     }

      // console.log(response);
      // return this.setState({
      //   gameCard: [].concat(gifObj)
      // });

    }).catch(err => {
      console.log('Error happened during fetching!', err);
    });

    console.log("clicked clicked BYE");
  };

  render() {
    return (
      <div id="search-game">
        <div className="landing--container">
          <div className="landing--title">
            <h1>Giphy GAME TIME!</h1>
            <p>Step 1: Enter a word</p><br />
            <div id="search-area">
              <form id="giphy-form" onSubmit={this.handleSubmit}>
                {/* <input type="text" id="giphy-input" /><br /> <br />
                            <input className="primary-btn" id="submit-giphy" type="submit" value="Submit" onclick="jumpto('main-game');" /> */}
                <input
                  type='text'
                  name='searchGiphy'
                  value={this.state.searchGiphy}
                  onChange={this.handleChange}
                  id='giphy-input'
                /> <br /> <br />
                <button className="primary-btn" id="submit-giphy">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <Giphy myDivToFocus={this.myDivToFocus} /> 
      </div> //end of main-game

    )//end of return 
  }
}


export default Game; 
