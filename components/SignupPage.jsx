import {React, useState,useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router';
import Link from 'next/link'
import styles from "../styles/signup.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const schema = yup.object({
    firstName: yup.string().required('Firstname is required.'),
    email: yup.string().email('Please provide a valid email.').required('Email is required.'),
    password: yup.string()
                .required('No password provided.') 
                .min(6, 'Password is too short - should be 6 chars minimum.')
                .max(15, 'Password is too lon - should be 15 chars maximum.')
                .matches(/^([a-zA-Z0-9@*#]{6,15})$/, 'Password can only contain alphanumeric and special characters.'),
    address: yup.string().required('No address provided.').matches(/^[a-zA-Z0-9\s,.'-]{3,}$/, 'Invalid Address Provided.'), 
    // This regex accepts minimum three character and there is no limit on max characters. Characters may include a-z, A-Z alphabets, whitespace, comma(,), dot(.), apostrophe ('), and dash(-) symbols.
}).required();

export default function SignupPage({changeSignupStatus}){
    const router = useRouter();
    const [show,setShow] = useState(false);
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     router.push(href)
    // }
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        address:""
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
            localStorage.setItem("signupStatus", true)  
        }
        changeSignupStatus();
        console.log(data);
    };
    const handleClick = (e)=>{
        setShow(!show);
    }

    return(
        <div className={ styles.signup_container } style={{display: 'flex',justifyContent: 'flex-start',alignItems: 'center'}}>
            <div className={ styles.row1 } style={{backgroundColor:"#1040c3",display: 'flex',justifyContent: 'center',alignItems: 'center',color:"floralwhite",fontStyle:"italic",
        marginBottom:"25px"}}>
                <h1 style={{marginTop:"0px"}}>
                    <p style={{fontSize:"40px",textAlign:"center"}}>Welcome!</p>
                    <p style={{fontSize:"18px",textAlign:"center"}}>Please sign up with your personal information to connect.</p>
                </h1>
            </div>
            <div className={ styles.row2 } style={{backgroundColor:"#fff", display: 'flex',justifyContent: 'center'}}>
                <div className={styles.loginCard}>
                    <div className={styles.loginText}>Signup</div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                            <label className={styles.label}>Username</label>
                            <input {...register("firstName")} className={styles.inp}
                            placeholder="Harshit Kashyap"
                            />
                            <p>{errors.firstName && errors.firstName.message ?
                            <>*{errors.firstName?.message}</>
                            :null}
                            </p>
                                
                            <label className={styles.label}>Email</label>
                            <input {...register("email")} className={styles.inp}
                            placeholder="bill@gmail.com"
                            />
                            <p>{errors.email ?<>*{errors.email?.message}</>:null}</p>
                            <label className={styles.label}>Password</label>
                            <div style={{display: 'flex'}}>
                                <input type ={show ? "text":"password"} {...register("password")} className={styles.inp} placeholder="ABCDEF12"
                                />
                                {show ? <VisibilityIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}/>:<VisibilityOffIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}></VisibilityOffIcon>}
                            </div>
                            <p>{errors.password ?<>*{errors.password?.message}</>:null}</p>
                            <label className={styles.label}>Address</label>
                            <input {...register("address")} className={styles.inp}  placeholder="111 Street A, Dwarka, Delhi"
                            />
                            <p>{errors.address ?<>*{errors.address?.message}</>:null}</p>
                            <input type="submit"/>
                            <Link href="/Login">
                                <span style={{color: "rgb(14, 104, 182)",fontWeight:"bold",cursor: "pointer"}}>Already have an account? Login here</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
