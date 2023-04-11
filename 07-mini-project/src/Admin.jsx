import { useContext } from "react"
import { Context } from "./UserContext"


const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const { fetchData } = useContext(Context)
    // example of fetchData() usage
    // const data = fetchData()
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // {
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }

    const users = fetchData()
    
    return (
        <div>
            {/* this is example of mapping array of object to html. */}
            {[{username: 'hello'}].map(item => <div>{item.username}</div>)}
        </div>
    )
}

export default Admin