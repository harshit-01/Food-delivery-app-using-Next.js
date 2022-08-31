import error from "../public/error404.png"
import Image from 'next/image'
import {useRouter} from 'next/router';
import Link from 'next/link'

export default function ErrorPage({x}){
    const router = useRouter();
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     router.push(href)
    // }

    return(
        <div style={{display: 'flex',justifyContent: 'flex-start',alignItems: 'center',width:"100%",height:"100vh"}}>
            <div style={{backgroundColor:"rgb(9, 121, 182)",width:"60%",height:"100%",display: 'flex',justifyContent: 'center',alignItems: 'center',color:"floralwhite",fontStyle:"italic"}}>
                <h1 style={{marginLeft:"5px"}}>
                    <p>OOPS!</p>
                    <p style={{color:"rgb(220, 10, 73)"}}>Error 404 Page Not Found</p>
                    <p style={{color:"rgb(220, 10, 73)"}}>Sorry, something went wrong.</p>
                    {x == true ? <Link href="/Login">
                        <a style={{color:"lightblue",fontSize:"18px"}}>Navigate  to Login page.</a>
                    </Link> : <Link href="/">
                        <a style={{color:"lightblue",fontSize:"18px"}}>Navigate  to Home page.</a>
                    </Link> }
                </h1>
            </div>
            <div style={{backgroundColor:"#fff",width:"40%",height:"100%", display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Image src= {error} width={400} height={400} style={{backgroundColor:"inherit"}}></Image>
            </div>
        </div>
    )
}