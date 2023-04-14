import { useState } from 'react'



const App = () => {
    // const [stateVariable, stateMethod] = useState(initValue)
    const [number, handleCounter] = useState(0)
    
    return (
        <div>
            <h3>People is coming from the gate. Please count.</h3>
            <span>{number}</span>
            &nbsp;
            <button
                onClick={() => handleCounter(number + 1)}
            >Count</button>
            <button
                onClick={() => handleCounter(number - 1)}
            >Decrease</button>
        </div>
    )
}

export default App

