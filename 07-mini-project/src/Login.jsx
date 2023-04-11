import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"

const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>

    return (
        <Layout>
            <div>
                <button onClick={() => login({ username: 'admin', password: 'admin' })}>Login</button>
            </div>
        </Layout>
    )
}

export default Login