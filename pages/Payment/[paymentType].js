import { useRouter } from 'next/router'
import React, { useState,useEffect } from "react";
import styles from '../../styles/payment.module.scss'
import Image from 'next/image'
import Payment from '../../public/Payment.jpg'
import Card from '../../public/CreditCard.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function PaymentType(){
    const router = useRouter();
    const plan = router.query.paymentType;
    console.log(router)
    const [formVal,setFormVal] = useState([
        {
            expiryDate:0,
            accountNumber:0,
            cvv:null
        }
    ]);
    const [open, setOpen] = React.useState({
        val:false,
        message:""
    });
    const [severity, setSeverity] = React.useState('success')
    let amount = 0;
    if (typeof window !== "undefined") {
        // debugger;
        // console.log(typeof(JSON.parse(localStorage.getItem("TotalPayment"))))
        if(JSON.parse(localStorage.getItem("TotalPayment")) != null){
          amount = JSON.parse(localStorage.getItem("TotalPayment"));
        }
    }
    console.log(amount)
    const handleClick = (e)=>{
        e.preventDefault();
        var formEl = document.forms.PaymentForm;
        var formData = new FormData(formEl);
        var expiryDate = formData.get('expiryDate');
        var accountNumber = formData.get('accountNumber');
        var cvv = formData.get('cvv');
        if(isNaN(cvv) || expiryDate.length == 0 || accountNumber.length == 0){
            // alert("Please fill all the card details.");
            handleSnackBar('warning');
        } 
        else{
            setFormVal([...formVal,{
                expiryDate:expiryDate,
                accountNumber:accountNumber,
                cvv:cvv
            }]);
            // alert("Payment Successful");
            handleSnackBar('success');
            localStorage.removeItem('name');
            setTimeout(function(){
                router.push('/TrackOrder')
            },4000)
        }
        // console.log(formVal,rating,restaurantReview,appReview);
    }
    const handleSnackBar = (val) => {
        if(val === 'success'){
            setOpen({...open,val:true,message: 'Payment successful. We will sent you the delivery guy details via email. So please check your email. Your order will be arriving soon.'});
        }
        else{
            setOpen({...open,val:true,message: 'Please fill all the card details.'});
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
        <div className={styles.paymentContainer}>
            <p>{plan}{" "}{plan === "Family" || plan === "Individual"?"Paid Plan":"Payment"}</p>
            <div className={styles.paymentSubContainer}>
                <div className={styles.col1}>
                    <p>Payment through UPI/wallet</p>
                    <Image src = {Payment} width= "200" height="200"></Image><br/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvq4TRKwTgv140b_tHZBDloJYkluI7MWf_-7oxyP_AEsbGNQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Click here to pay via UPI/wallet</a>
                </div>
                <div className={styles.col2}>
                    <div className={styles.card}>
                        <p>Payment through Card</p>
                        <Image src = {Card} width= "200" height="100"></Image>
                    </div>
                    <div className={styles.form} >
                        <form action="" method="post"  id="PaymentForm">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" name="accountNumber" placeholder="12345678901234" required></input>
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input type="text" name="expiryDate" placeholder="MM/YYYY" required></input>
                            <label htmlFor="cvv">CVV</label>
                            <input type="number" max ="3" name="cvv" placeholder="123" required></input>
                            <label htmlFor="Amount">Amount to Pay</label>
                            <input type="text"  name="amount" placeholder="Rs 5000" value ={plan === "Family" ? "Rs 400" : plan === "Individual" ? "Rs 300":amount}required></input>
                            {/* <input type="submit" onClick={handleClick}></input> */}
                            <Button  variant="outlined" color="success" sx ={{width:"40%",marginTop: "20px"}} onClick={handleClick}>Pay</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={open.val} autoHideDuration={5000} onClose={handleClose} 
            anchorOrigin={{ vertical:"top", horizontal:'right' }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '75%' }}>
                    {open.message}
                </Alert>
            </Snackbar>
        </div>
    )
}