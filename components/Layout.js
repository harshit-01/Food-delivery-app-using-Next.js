import Navbar from './Navbar.jsx'; 

const Layout = ({children,logout,cartItem,setCartItem,details})=>{
    console.log(logout)
    return (
        <>
            <Navbar logout={logout} cartItem={cartItem} setCartItem={setCartItem} details={details}></Navbar>
            {children}
        </>
    )
}
export default Layout;