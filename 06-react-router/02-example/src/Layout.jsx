import Navbar from "./Nav"

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout