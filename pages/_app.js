import { useState,useEffect } from 'react';
import Layout from '../components/Layout';
import Login from '../components/LoginPage.jsx';
import '../styles/globals.css'
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const noLayout = ['/Menu', '/about']
  // console.log(router,noLayout.indexOf(router.asPath))
  console.log(isLoggedIn)
  useEffect(() => {
    // Perform localStorage action
    if(localStorage.getItem("loginStatus")){
        setIsLoggedIn(localStorage.getItem("loginStatus"));
    }
  }, [isLoggedIn])
  const changeLoginStatus = ()=>{
    if(localStorage.getItem("loginStatus")){
      setIsLoggedIn(localStorage.getItem("loginStatus"));
    }
  }
  const logout = ()=>{
    // debugger;
    if(localStorage.getItem("loginStatus")){
      localStorage.removeItem("loginStatus");
      setIsLoggedIn(false);
    }
  }
  if(isLoggedIn === false){
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
