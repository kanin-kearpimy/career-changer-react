import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"
import { useEffect } from "react"


const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const { fetchData } = useContext(Context)
    const [users, setUsers] = useState([])
    // example of fetchData() usage
    // const data = fetchData()
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // [{
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }]

    useEffect(() => {
        const data = fetchData()
        setUsers(data)
    }, [])
    
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Organization</th>
            </tr>
            {users.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.fullname}</td>
                        <td>{item.organization}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Admin