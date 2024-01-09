import axios from "axios";
import { useState } from "react";

function BasicApp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const getUser = async () => {
    const response = await axios.get("http://127.0.0.1:3001/users");
    console.log(response.data);
    setUsers(response.data);
  };

  const createUser = async () => {
    await axios.post("http://127.0.0.1:3001/users", {
      name: name,
      age: age,
    });
    alert("Create User");
  };

  return (
    <div>
      <h1>Basic Application</h1>
      <button onClick={getUser}>Get User</button>
      <button onClick={createUser}>Create User</button>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(event) => setAge(event.target.value)}
      />
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
    </div>
  );
}

export default BasicApp;
