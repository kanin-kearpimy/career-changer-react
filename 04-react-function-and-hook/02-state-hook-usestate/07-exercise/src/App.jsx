import { useState } from 'react'

const App = () => {
    const [color, setColor] = useState()
    
    return (
        <>
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
        </>
    )
}

export default App

