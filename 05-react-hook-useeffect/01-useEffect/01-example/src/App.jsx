import { useEffect } from "react"

const App = () => {

    const greeting = () => {
        alert("Welcome to the application.")
    }

    useEffect(greeting, [])

    return (
        <div className="container">
            <div className="text">
                Hello James!
            </div>
        </div>
    )
}

export default App
