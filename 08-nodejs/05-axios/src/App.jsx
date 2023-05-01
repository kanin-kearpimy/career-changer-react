import { useState, useEffect } from "react";
import { getUser, createUser } from "./api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [load, toggleReload] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getUser();
      setUsers(users);
    };

    getUsers();
  }, [load]);

  const save = async () => {
    const newUser = {
      name,
      age,
    };
    await createUser(newUser);
    toggleReload(!load);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={save}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
