import { useState } from 'react'

const App = () => {
    const [color, setColor] = useState()
    
    return (
        <div>
            {color === 'yellow' && 
                <div style={
                    {
                        width: '150px', 
                        height: '150px', 
                        margin: '12px', 
                        background: 'yellow'
                    }
                }>YELLOW</div>
            }

            {color === 'blue' && 
                <div style={
                    {
                        width: '150px', 
                        height: '150px', 
                        margin: '12px', 
                        background: 'blue'
                    }
                }>BLUE</div>
            }

            <button onClick={() => setColor('yellow')}>Show Yellow</button>
            <button onClick={() => setColor('blue')}>Show Blue</button>
        </div>
    )
}

export default App

// const App = () => {
//     // [stateVariable, stateMethod] = useState(init)
//     const [color, setColor] = useState()

//     let DivElement = <div></div>
//     if(color == "yellow") {
//         DivElement = <div>YELLOW</div>
//     }else if(color == "blue"){
//         DivElement = <div>BLUE</div>
//     }else if(color == "pink") {
//         DivElement = <div>PINK</div>
//     }

//     return (
//         <div>
//             {DivElement}

//             <button onClick={() => setColor('yellow')}>
//                 Show Yellow
//             </button>
//             <button onClick={() => setColor('blue')}>
//                 Show Blue
//             </button>
//             <button onClick={() => setColor('pink')}>Show Pink</button>
//         </div>
//     )
// }