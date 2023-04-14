import { useState } from "react"

const JSXLoop = () => {
    const employee1 = {
        name: "John",
        organization: "ABC Inc.",
        position: "Developer"
    }
    const employee2 = {
        name: "Jane",
        organization: "XYZ Crop.",
        position: "Designer"
    }
    const employee3 = {
        name: "Bob",
        organization: "123 LLC",
        position: "Manager"
    }
    
    const [employees, setEmployees] = useState([employee1, employee2, employee3])

    // object in array
    // iterable -> repeatable -> repetation
    // const employees = [employee1, employee2, employee3]
    // employees[0] = employee1
    // employees[1] = employee2
    // employees[2] = employee3
    // for(initial index, condition to continue loop, logic to increase index)
    // for (let index = 0; index <= 2; index++) {
    //     return employees[index]
    //     console.log(`at index ${index} value is : `, employees[index])
    // }


    const showEmployee = (iter) => {
        return (
            <tr>
                <td>{iter.name}</td>
                <td>{iter.organization}</td>
                <td>{iter.position}</td>
            </tr>
        )
    }
    
    employees.map((iter) => {
        return (
            <tr>
                <td>{iter.name}</td>
                <td>{iter.organization}</td>
                <td>{iter.position}</td>
            </tr>
        )
    })

    
    
    return (
        <div className="App"> {/* Add class name */}
        <h1>Table Example</h1>
        <div>
            <input type="text" placeholder="Type new name here" style={{margin: '4px'}} />
            <input type="text" placeholder="Type new organization here" style={{margin: '4px'}} />
            <input type="text" placeholder="Type new position here" style={{margin: '4px'}} />
            <button style={{margin: '4px'}}>Save</button>
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
                {employees.map(showEmployee)}
            </tbody>
        </table>
        </div>
    )
}

export default JSXLoop