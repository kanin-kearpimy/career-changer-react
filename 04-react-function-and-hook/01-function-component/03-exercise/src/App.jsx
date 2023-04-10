import React from "react";

function App() {
    
    return (
      <div id="app">
        <img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"/>
        <Info />
        <Social />
      </div>
    );
}

function Info() {
    let name = "Kong"
    let bio = "someone who learns coding."

    return (
        <div id="info">
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}

function Social() {

    return (
        <div id="social">
            <a href="https://github.com/">Facebook</a>
            <a href="https://google.com/">Twitter</a>
        </div>
    )
}

export default App;
