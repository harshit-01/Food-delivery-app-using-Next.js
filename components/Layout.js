import Navbar from './Navbar.jsx'; 

const Layout = ({children,logout})=>{
    console.log(logout)
    return (
        <>
            <Navbar logout={logout}></Navbar>
            {children}
        </>
    )
}
export default Layout;