import { useState } from "react"

const App = () => {
    // state
    // const [stateVariable, stateMethod] = useState(initialValue)
    const [name, setName] = useState()
    const [bio, setBio] = useState()

    return (
        <>
            <input onChange={(event) => setName(event.target.value)} type="text" placeholder="your name" />
            <input onChange={(event) => setBio(event.target.value)} type="text" placeholder="your bio" />
            <Info name={name} bio={bio} />
        </>
    )
}

const Info = (props) => {
    
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <p>{props.bio}</p>
            </div>
        </>
    )
}

export default App