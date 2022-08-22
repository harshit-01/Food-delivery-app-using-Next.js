import {React, useState,useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router';
import Link from 'next/link'
import styles from "../styles/login.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const schema = yup.object({
    firstName: yup.string().required('Firstname is required.'),
    email: yup.string().email('Please provide a valid email.'),
    password: yup.string()
                .required('No password provided.') 
                .min(6, 'Password is too short - should be 6 chars minimum.')
                .max(15, 'Password is too lon - should be 15 chars maximum.')
                .matches(/^([a-zA-Z0-9@*#]{6,15})$/, 'Password can only contain alphanumeric and special characters.')
}).required();

export default function LoginPage({changeLoginStatus}){
    const router = useRouter();
    const [show,setShow] = useState(false);
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     router.push(href)
    // }
    const defaultValues = {
        firstName: "bill",
        lastName: "luo",
        email: "a5@gmail.com"
    };
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues
    });
    // useEffect(() => {
    //     // Perform localStorage action
    //     if(localStorage.getItem("loginStatus")){
    //         setIsLoggedIn(localStorage.getItem("loginStatus"));
    //     }
    // }, [isLoggedIn])
    const onSubmit = (data) => {
        if (typeof window !== "undefined" && data.email.length > 0 ) {
            localStorage.setItem("loginStatus", true)  
        }
        changeLoginStatus();
        console.log(data);
    };
    const handleClick = (e)=>{
        setShow(!show);
    }

    return(
        <div className={ styles.container } style={{display: 'flex',justifyContent: 'flex-start',alignItems: 'center'}}>
            <div className={ styles.row1 } style={{backgroundColor:"#00563f",display: 'flex',justifyContent: 'center',alignItems: 'center',color:"floralwhite",fontStyle:"italic"}}>
                <h1>
                    <p style={{fontSize:"40px",textAlign:"center"}}>Welcome Back!</p>
                    <p style={{fontSize:"18px",textAlign:"center"}}>Please log in with your personal information to connect.</p>
                </h1>
            </div>
            <div className={ styles.row2 } style={{backgroundColor:"#fff", display: 'flex',justifyContent: 'center'}}>
                <div className={styles.loginCard}>
                    <div className={styles.loginText}>Login</div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                            <label className={styles.label}>Username</label>
                            <input {...register("firstName")} className={styles.inp}
                            defaultValue={defaultValues.firstName}
                            placeholder="bill"
                            />
                            <p>{errors.firstName && errors.firstName.message ?
                            <>*{errors.firstName?.message}</>
                            :null}
                            </p>
                                
                            <label className={styles.label}>Email</label>
                            <input {...register("email")} className={styles.inp}
                            // defaultValue={defaultValues.firstName}
                            placeholder="bill"
                            />
                            <p>{errors.email ?<>*{errors.email?.message}</>:null}</p>
                            <label className={styles.label}>Password</label>
                            <div style={{display: 'flex'}}>
                                <input type ={show ? "text":"password"} {...register("password")} className={styles.inp}
                                // defaultValue={defaultValues.firstName}
                                />
                                {show ? <VisibilityIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}/>:<VisibilityOffIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}></VisibilityOffIcon>}
                            </div>
                            <p>{errors.password ?<>*{errors.password?.message}</>:null}</p>
                            <input type="submit"/>
                            <Link href="/Signup"><span style={{color: "rgb(0, 86, 63)",fontWeight:"bold",cursor: "pointer"}}>Don't have an account? Signup here</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
