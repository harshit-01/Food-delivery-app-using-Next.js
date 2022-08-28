import React, { useState,useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router';
import Link from 'next/link'
import styles from "../styles/signup.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    const [open, setOpen] = React.useState({
        val:false,
        message:""
    });
    const [severity, setSeverity] = React.useState('success')
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
    const onSubmit = async(data) => {
        console.log(data);
        try {
            await axios.post('/api/Signup', {
                username: data.firstName,
                email: data.email,
                password:data.password,
                address:data.address
            }).then((response) => {
                if (typeof window !== "undefined" && data.email.length > 0 ) {
                    localStorage.setItem("signupStatus", true) 
                    localStorage.setItem("id", response.data.user._id)   
                }
                if(response.data.user.username.length > 0){
                    handleSnackBar('success');
                }
                    
                changeSignupStatus();
                console.log(response);
            })
        } 
        catch (error) {
            handleSnackBar('error');
            console.error("error",error);
        }
    };
    const handleClick = (e)=>{
        setShow(!show);
    }
    const handleSnackBar = (val) => {
        if(val === 'success'){
            setOpen({...open,val:true,message: 'User account created successfully.'});
        }
        else{
            setOpen({...open,val:true,message: 'User could not be created successfully. Please try again later'});
        }
        setSeverity(val)
      };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setOpen({...open,val:false,message: ''});
    };
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
                        <form  style={{marginBotton:"8px"}}onSubmit={handleSubmit(onSubmit)} autoComplete="on">
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
            <Snackbar open={open.val} autoHideDuration={4000} onClose={handleClose} 
                    anchorOrigin={{ vertical:"top", horizontal:'right' }}>
                        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                            {open.message}
                        </Alert>
            </Snackbar>
        </div>
    )
}
