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
    if(localStorage.getItem("loginStatus")){
        setIsLoggedIn(localStorage.getItem("loginStatus"));
    }
  }, [isLoggedIn])
  const changeLoginStatus = ()=>{
    if(localStorage.getItem("loginStatus")){
      setIsSignedIn(localStorage.getItem("loginStatus"));
    }
  }
  const  changeSigupStatus= ()=>{
    if(localStorage.getItem("signupStatus")){
      setIsSignedIn(localStorage.getItem("signupStatus"));
    }
  }
  const logout = ()=>{
    // debugger;
    if(localStorage.getItem("loginStatus")){
      localStorage.removeItem("loginStatus");
      setIsLoggedIn(false);
    }
  }
  if(router.route === '/Signup' || router.route === '/'){
    return <Signup changeLoginStatus={changeSigupStatus}/>
  }
  if(router.route === '/Login'){
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
