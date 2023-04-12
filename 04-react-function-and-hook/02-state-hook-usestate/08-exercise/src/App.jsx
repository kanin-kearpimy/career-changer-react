import React, { useState } from 'react';


const App = () => {
    //Set state and method
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    // const [cat2, setCat2] = useState();
    // const [cat3, setCat3] = useState();

    // //Add methods
    // // const handleClick = (value) => {
    // //     // code here.
    // //     setCat2(value) || setCat3(value)
    // //   };

    // let catB = cat2;
    //     if (cat2 === "catB") {
    //         catB = <img width="250px" alt="cat02" src ="https://media.tenor.com/RH9jOdC3R80AAAAd/cat-bop.gif"/>;
    //     }

    // let catC = cat3;
    //     if (cat3 === "catC") {
    //         catB = <img width="250px" alt="cat03" src ="https://cdn.vox-cdn.com/thumbor/2ex2LYtWIMXUP3Od9KKrMwa5YX4=/29x0:340x207/1400x1400/filters:focal(29x0:340x207):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/32606283/q3e87zR.0.gif"/>;
    //     }

    return (
        <div>
            <img src="https://media.tenor.com/CH9a7exGiFIAAAAM/cat-mute.gif"/>
            {/* <div>{catB}</div>
            <div>{catC}</div> */}
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
    //     if (props.name !== "") {
    //          return props.name ;
    //     } else {
    //         return myName = "Kong" ;
    //        }


    // let myBio = props.bio;
    //     if (props.bio !== ("")) {
    //         return props.bio;
    //     } else {
    //         return myBio = "someone who learns coding.";
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

const Social = (props) => {
    // const handleClick = (value) => {
    //     props.setCat2(value);
    //     props.setCat3(value);
    // };

    return (
        <div>
            <a href="#"> Facebook </a>
            &nbsp;
            <a href="#">Twitter</a>
            {/* <br/>
            <button onClick={() => handleClick('catB')}>Meow2</button>
            &nbsp;
            <button onClick={() => handleClick('catC')}>Meow3</button> */}
        </div>
    )
}


export default App;
