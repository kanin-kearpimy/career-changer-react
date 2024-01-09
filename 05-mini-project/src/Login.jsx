import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"

const Login = () => {
    // You have to pass data to login() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => login({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <Layout>
            <div>
                <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
                <input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="password" />
                <button onClick={() => login({
                    username: username,
                    password: password
                })} >Login</button>
            </div>
        </Layout>
    )
}

export default Login