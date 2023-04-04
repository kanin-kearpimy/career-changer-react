import React from 'react'
import './assets/layout.css'
import App from './App'
import App2 from './App2'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBasic: true
        }
    }

    render() {
        if(this.state.isBasic) {
            return (
                <>
                    <button onClick={() => this.setState({isBasic: false})}>Go a bit challenge</button>
                    <div className='main'>
                        <App />
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <button onClick={() => this.setState({isBasic: true})}>Back to basic</button>
                    <div className='main'>
                        <App2 />
                    </div>
                </>
            )
        }

    }
}

export default Layout