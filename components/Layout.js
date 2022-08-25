import Navbar from './Navbar.jsx'; 

const Layout = ({children,logout,cartItem,setCartItem})=>{
    console.log(logout)
    return (
        <>
            <Navbar logout={logout} cartItem={cartItem} setCartItem={setCartItem}></Navbar>
            {children}
        </>
    )
}
export default Layout;