import { useEffect, useState } from "react"


const AutoSync = () => {
    const [employees, setEmployee] = useState([])

    const syncInfo = () => {
        // object in array
        const data = [
            {
                name: "John",
                organization: "ABC Inc.",
                position: "Developer"
            },
            {
                name: "Jane",
                organization: "XYZ Corp.",
                position: "Designer"
            },
            {
                name: "Bob",
                organization: "123 LLC",
                position: "Manager"
            },
        ]
        setEmployee(data)
    }

    useEffect(syncInfo, [])

    const addMockDataToEmployees = () => {
        const newEmployee = {
            name: "Mock Data",
            organization: "Mock Company",
            position: "Mock Position"
        }
        // console.log('without ... =>', employees)
        // console.log('have ... =>', ...employees)
        // const items = employees
        // const items = [employees]
        // console.log('ข้อ 1', employees);
        // console.log('ข้อ 2', [employees])
        const items = [employees, newEmployee]
        console.log([employees, newEmployee]);
        console.log([...employees, newEmployee]);
        setEmployee([...employees, newEmployee])
    }

    return (
        <div>
            <button onClick={addMockDataToEmployees}>Add Employee</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Organization</th>
                    <th>Position</th>
                </tr>
                {employees.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.organization}</td>
                            <td>{item.position}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default AutoSync