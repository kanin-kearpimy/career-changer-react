import Navbar from "./Nav"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout