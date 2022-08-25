import { useState,useEffect } from 'react';
import Layout from '../components/Layout';
import Login from './Login/index.js';
import Signup from './Signup/index.js';
import '../styles/globals.css'
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isSignedIn,setIsSignedIn] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [cartItem,setCartItem] = useState(0);
  const noLayout = ['/Menu', '/about']
  console.log(router,noLayout.indexOf(router.asPath))
  console.log(isLoggedIn)

  useEffect(() => {
    // Perform localStorage action
    if (typeof window !== "undefined") {
      if(localStorage.getItem("loginStatus")){
        setIsLoggedIn(localStorage.getItem("loginStatus"));
      }
    }
    if (typeof window !== "undefined") {
      if(localStorage.getItem("signupStatus")){
        setIsSignedIn(localStorage.getItem("signupStatus"));
      }
    }
  }, [isLoggedIn,isSignedIn])

  const cartVal = () => {
    if(typeof window !== "undefined"){
      setCartItem(parseInt(JSON.parse(localStorage.getItem("name"))?.length));
      // console.log(JSON.parse(localStorage.getItem("name"))?.length)
    }
  }

  const changeLoginStatus = ()=>{
    if (typeof window !== "undefined") {
      if(localStorage.getItem("loginStatus")){
        setIsLoggedIn(localStorage.getItem("loginStatus"));
      }
    }
    router.replace('/', null, { shallow: true });
  }
  const changeSignupStatus= ()=>{
    if(localStorage.getItem("signupStatus")){
      setIsSignedIn(localStorage.getItem("signupStatus"));
    }
    router.push('/Login');
  }
  const logout = ()=>{
    if(localStorage.getItem("loginStatus")){
      localStorage.removeItem("loginStatus");
      setIsLoggedIn(false);
    }
    router.push('/Login');
  }
  if(router.route === '/Signup' || (router.route === '/' && isSignedIn === false)){
    return <Signup changeSignupStatus={changeSignupStatus}/>
  }
  else if(router.route === '/Login' && (isLoggedIn === false)){
    return <Login changeLoginStatus={changeLoginStatus}/>
  }
  else{
    if(router.route === "/404") {
      return <Component {...pageProps}/>
    } 
    else {
      return (
      <Layout logout={logout} cartItem={cartItem} setCartItem={setCartItem}>
        <Component {...pageProps} cartVal={cartVal}/>
      </Layout>
      )
    }
  }
}

export default MyApp
