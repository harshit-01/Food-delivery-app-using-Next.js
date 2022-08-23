import { useRouter } from 'next/router'
import { useState } from "react";
import styles from '../../styles/payment.module.scss'
import Image from 'next/image'
import Payment from '../../asset/Payment.jpg'
import Card from '../../asset/CreditCard.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function PaymentType(){
    const router = useRouter();
    const plan = router.query.paymentType;
    console.log(router)
    const [formVal,setFormVal] = useState([
        {
            appReview:"Great user interface, easy to access and order food",
            restaurantReview:"Mcd - Great combo offers",
            rating:4.2
        }
    ]);
    const handleClick = (e)=>{
        e.preventDefault();
        var formEl = document.forms.PaymentForm;
        var formData = new FormData(formEl);
        var appReview = formData.get('expiryDate');
        var restaurantReview = formData.get('restaurant_review');
        var rating = formData.get('cvv');;
        setFormVal([...formVal,{
            appReview:appReview,
            restaurantReview:restaurantReview,
            rating:rating
        }]);

        console.log(formVal,rating,restaurantReview,appReview);
    }
    return(
        <div className={styles.paymentContainer}>
            <p>{plan} Paid Plan</p>
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
                            <label for="accountNumber">Account Number</label>
                            <input type="text" name="accountNumber" placeholder="12345678901234" required></input>
                            <label for="expiryDate">Expiry Date</label>
                            <input type="text" name="expiryDate" placeholder="MM/YYYY" required></input>
                            <label for="cvv">CVV</label>
                            <input type="number" max ="3" name="cvv" placeholder="123" required></input>
                            <label for="Amount">Amount to Pay</label>
                            <input type="text"  name="amount" placeholder="Rs 5000" value ={plan === "Family" ? "Rs 400" : "Rs 300"}required></input>
                            {/* <input type="submit" onClick={handleClick}></input> */}
                            <Button  variant="outlined" color="success" sx ={{width:"40%",marginTop: "20px"}} onClick={handleClick}>Pay</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}