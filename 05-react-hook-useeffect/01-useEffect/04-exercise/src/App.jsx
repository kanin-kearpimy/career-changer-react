import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [orga, setOrga] = useState("");
  const [pos, setPos] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { name, orga, pos}]);
    setName('');
    setOrga('');
    setPos('');
  }

  return (
    <div className="App"> {/* Add class name */}
      <form onSubmit={handleSubmit}>
        <h1>Table Example</h1>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type new name here" style={{margin: '4px'}} required />
          <input type="text" value={orga} onChange={(e) => setOrga(e.target.value)} placeholder="Type new organization here" style={{margin: '4px'}} required />
          <input type="text" value={pos} onChange={(e) => setPos(e.target.value)} placeholder="Type new position here" style={{margin: '4px'}} required />
          <button type="submit" style={{margin: '4px'}}>Save</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Organization</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>ABC Inc.</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>XYZ Corp.</td>
              <td>Designer</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>123 LLC</td>
              <td>Manager</td>
            </tr>
              {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.orga}</td>
                <td>{item.pos}</td>
              </tr>
              ))}
            
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
