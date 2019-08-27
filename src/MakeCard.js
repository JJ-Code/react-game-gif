import React from "react";
import "./App.css";
import uuid from "uuid/v4";


// const makeCard = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const giphyDiv = document.createElement("div");
//         giphyDiv.classList.add("col-lg-3", "giphyDiv");
//         const giphyImage = document.createElement("img");
//         giphyImage.src = array[i].url;
//         giphyImage.setAttribute("data-id", array[i].id);
//         giphyImage.classList.add("giphyImage");
//         giphyDiv.appendChild(giphyImage);
//         document.getElementById("giphy-view").appendChild(giphyDiv);
//     } //end of forloop 

// }



const MakeCard = (props) => {

    return(
        <div className={"col-lg-3 giphyDiv"}>
            <image ></image>
        </div>

    )

}

export default MakeCard;