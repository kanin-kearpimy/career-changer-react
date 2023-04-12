
class UsersControl {

    init = () => {
        if(localStorage.getItem('users') === null){
            localStorage.setItem('users', JSON.stringify([
                {
                    username: 'admin',
                    password: 'admin',
                    fullname: 'admin admin',
                    organization: 'Generation Thailand',
                    role: 'admin'
                },
                {
                    username: 'user1',
                    password: 'user1',
                    fullname: 'user1 user1',
                    organization: 'Generation Thailand',
                    role: 'user'
                },
                {
                    username: 'user2',
                    password: 'user2',
                    fullname: 'user2 user2',
                    organization: 'Generation Thailand',
                    role: 'user'
                }
            ]))
        }

        if(localStorage.getItem('current-user') === null) {
            localStorage.setItem('current-user', JSON.stringify({}))
        }
        
    }

    fetchData = () => {
        return JSON.parse(localStorage.getItem('users'))
    }

    login = ({ username, password }) => {
        const users = this.fetchData()
        for (let index = 0; index < users.length; index++) {
            if(users[index].username === username && users[index].password === password) {
                return [true, users[index]]
            }
        }
        return [false, {}]
    }

    setUser = ({ id, username, fullname, organization, role }) => {
        localStorage.setItem('current-user', JSON.stringify({ id, username, fullname, organization, role }))
    }

    getUser = () => {
        return JSON.parse(localStorage.getItem('current-user'))
    }

    save = (users) => {
        users.role = 'user'
        localStorage.setItem('users', JSON.stringify(users))
    }

    signup = ({ username, password, fullname, organization }) => {
        const users = this.fetchData()
        const id = users.length + 1
        users.push({ id, username, password, fullname, organization })
        this.save(users)
    }
}

export default UsersControl