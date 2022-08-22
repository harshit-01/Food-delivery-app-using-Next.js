import { useRouter } from 'next/router'
import styles from '../../styles/payment.module.scss'
import Image from 'next/image'
import Payment from '../../asset/Payment.jpg'
import Card from '../../asset/CreditCard.jpg'
import TextField from '@mui/material/TextField';


export default function PaymentType(){
    const router = useRouter();
    const plan = router.query.paymentType;
    console.log(router)
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
                    <div className={styles.form}>
                        <form>
                            <label for="expiryDate">Account Number</label>
                            <input type="text" name="expiryDate" placeholder="12345678901234" required></input>
                            <label for="expiryDate">Expiry Date</label>
                            <input type="text" name="expiryDate" placeholder="MM/YYYY" required></input>
                            <label for="expiryDate">CVV</label>
                            <input type="number" max ="3" name="expiryDate" placeholder="123" required></input>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}