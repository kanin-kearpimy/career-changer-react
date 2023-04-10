import React from "react";

function App() {
    return (
      <div>
        <h1>Table Example</h1>
        <Input />
        <Data />
      </div>
    );
  }
  
  function Input() {
    return (
      <div>
        <form>
            <input type="text" id="name" placeholder="Type new mane here" class="gap 1px"></input> &nbsp; 
            <input type="text" id="organization" placeholder="Type new organization here"></input> &nbsp;
            <input type="text" id="position" placeholder="Type new position here"></input> &nbsp;
            <button>Save</button>
        </form>
      </div>
    );
  }
  
  function Data() {  
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
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
        </table>
      </div>
    );
  }

export default App;