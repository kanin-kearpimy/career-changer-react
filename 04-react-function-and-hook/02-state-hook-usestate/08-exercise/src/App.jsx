import React, { useState } from 'react';


const App = () => {
    //Set state and method
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    
    return (
        <div>
            <img src="https://media.tenor.com/CH9a7exGiFIAAAAM/cat-mute.gif"/>
            <GetInput setName={ setName } setBio={ setBio } />
            <ShowInput name={ name } bio={ bio } />
            <Social />
        </div>
    );
}

const GetInput = (props) => {

    return (
        <div>
            <input onChange={(event) => { props.setName( event.target.value) }} type="text" placeholder="Add Name!"></input>
            <input onChange={(event) => { props.setBio( event.target.value) }} type="text" placeholder="Add Short Bio!"></input>
        </div>
    )
}

const ShowInput = (props) => {

        // Why it can not run this If statement
    // let myName = props.name; 
    //     if (props.name == "") {
    //         myName = "Kong";
    //     }

    // let myBio = props.bio;
    //     if (props.bio == "") {
    //         myBio = "someone who learns coding.";
    //     } 

    const myName = props.name ? props.name : "Kong";
    const myBio = props.bio ? props.bio : "someone who learns coding.";

    return (
        <div>
              <h1>{myName}</h1>
              <p>{myBio}</p>
        </div>
    );
}

const Social = () => {

    return (
        <div>
            <a href="#">Facebook</a>
            &nbsp;
            <a href="#">Twitter</a>
        </div>
    )
}


export default App;