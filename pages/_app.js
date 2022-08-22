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
  const changeLoginStatus = async()=>{
    if (typeof window !== "undefined") {
      if(localStorage.getItem("loginStatus")){
        setIsLoggedIn(localStorage.getItem("loginStatus"));
      }
    }
    router.push('/');
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
  if(router.route === '/Login' && isLoggedIn === false){
    return <Login changeLoginStatus={changeLoginStatus}/>
  }
  if(router.route === "/404") {
    return <Component {...pageProps} />
  } 
  else {
    return (
    <Layout logout={logout}>
      <Component {...pageProps} />
    </Layout>
    )
  }
}

export default MyApp
