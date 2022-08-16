import Navbar from './Navbar.jsx'; 

const Layout = ({children})=>{
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}
export default Layout;