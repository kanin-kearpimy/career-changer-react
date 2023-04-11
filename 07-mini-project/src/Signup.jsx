import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>

    return (
        <Layout>
            <div>
                Signup
            </div>
        </Layout>
    )
}

export default Signup