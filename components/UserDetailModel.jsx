import {React, useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from "../styles/model.module.scss"
import { date } from 'yup/lib/locale';
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';

const schema = yup.object({
    firstName: yup.string().required('Firstname is required.'),
    email: yup.string().email('Please provide a valid email.').required('Email is required.'),
    // password: yup.string()
    //             // .required('No password provided.') 
    //             .min(6, 'Password is too short - should be 6 chars minimum.')
    //             .max(15, 'Password is too lon - should be 15 chars maximum.')
    //             .matches(/^([a-zA-Z0-9@*#]{6,15})$/, 'Password can only contain alphanumeric and special characters.'),
    address: yup.string().required('No address provided.').matches(/^[a-zA-Z0-9\s,.'-]{3,}$/, 'Invalid Address Provided.'), 
    // This regex accepts minimum three character and there is no limit on max characters. Characters may include a-z, A-Z alphabets, whitespace, comma(,), dot(.), apostrophe ('), and dash(-) symbols.
}).required();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"90%", md:"65%"},
  height: {xs:"90%", md:"92%"},
  bgcolor: 'background.paper',
  border: '2px solid gray',
  boxShadow: 24,
  overflowY: {xs:"scroll", md:"hidden"},
  p: 4,
};

export default function UserDetailModel({open,handleOpen,handleClose}) {
    const [show,setShow] = useState(false);
    const defaultValues = {
        firstName: "",
        email: "",
        address:""
    };
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues
    });
    const onSubmit = async(data) => {
        console.log(data)
        try {
            const response = await axios.post('/api/Profile', {
                username: data.firstName,
                email: data.email,
                address:data.address
            })
            console.log(response);
        } 
        catch (error) {
            console.error(error);
        }
        handleClose();
    };
    const handleClick = (e)=>{
        setShow(!show);
    }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display: 'flex',width:"100%"}}>
                <p className={styles.modalTitle}>User Details</p>
                <CloseIcon sx={{marginLeft:"auto"}} onClick={handleClose}/>
            </div>
            <div className={styles.modal}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete="on">
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
                    <div style={{display: 'flex',width: '80%'}}>
                        <input type ={show ? "text":"password"} {...register("password")} className={styles.inp} placeholder="ABCDEF12"
                        />
                        {show ? <VisibilityIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}/>:<VisibilityOffIcon sx={{m:2,cursor:"pointer"}} onClick = {handleClick}></VisibilityOffIcon>}
                    </div>
                    <p>{errors.password ?<>*{errors.password?.message}</>:null}</p>
                    <label className={styles.label}>Address</label>
                    <input {...register("address")} className={styles.inp}
                    placeholder="111 Street A, Dwarka, Delhi"/>
                    <p>{errors.address ?<>*{errors.address?.message}</>:null}</p>
                    <div style={{width:"85%"}}>
                        <input type="submit" className={styles.submit}/>
                    </div>
                </form>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
