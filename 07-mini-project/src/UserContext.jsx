import { useState } from "react";
import UsersControl from "./api/users";
import { createContext } from "react";
import { useEffect } from "react";

export const Context = createContext({})

const UserContext = ({ children }) => {
    const userController = new UsersControl()
    const [currentUser, setCurrentUser] = useState(null)
    userController.init()

    const login = ({ username, password }) => {
        const [status, data] = userController.login({ username, password })
        if(!status) {
            alert('login failed!')
            return
        }

        userController.setUser({
            id: data.id, 
            username: data.username, 
            fullname: data.fullname, 
            organization: data.organization,
            role: data.role
        })

        setCurrentUser({
            id: data.id, 
            username: data.username, 
            fullname: data.fullname, 
            organization: data.organization,
            role: data.role
        })
        alert('Login Success!')
        location.href = '/'
    }



    const handlers = {
        signup: userController.signup,
        fetchData: userController.fetchData,
        login: login,
        getCurrent: () => currentUser,
        getUserRole: () => currentUser !== null ? currentUser.role : 'other'
    }

    useEffect(() => {
        const user = userController.getUser()
        if(Object.keys(user).length > 0) {
            setCurrentUser(user)
        }
    }, [])

    return (
        <Context.Provider value={handlers}>
            {children}
        </Context.Provider>
    )
}

export default UserContext