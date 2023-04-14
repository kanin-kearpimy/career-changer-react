// create RED BOX
const App = () => {
    return (
        <div>
            <h1>Table Example</h1>
            <InputForm />
            <TableContent />
        </div>
    )
}

// create GREEN BOX
const InputForm = () => {
    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Save</button>
        </div>
    )
}

// create BLUE BOX
const TableContent = () => {
    return (
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
        </table>
    )
}

export default App;