import React,{useState,useEffect} from 'react'
import styles from '../../styles/menu.module.scss';
import { foodItems } from "../../data.js"
import {useRouter} from 'next/router';
import { style } from '@mui/system';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// export async function getStaticProps(context) {
//     return {
//       props: {
//         foodItems
//       }, // will be passed to the page component as props
//     }
// }

export default function Item(){
    const router = useRouter();
    console.log(parseInt(router.query.id))
    const x = parseInt(router.query.id);
    const [foodItem,setFoodItem] = useState({});
    const [foodItemId,setFoodItemId] = useState(null);
    const [snackbar,setSnackbarState] = useState({
        open:false,
        message:""
    });
    const [cartItems,setCartItems] = useState([]);
    useEffect(()=>{
        if(x != undefined || x!= null){
            setFoodItemId(parseInt(router.query.id));
        }
    },[x])

    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== "undefined") {
          if(localStorage.getItem("name")){
            setCartItems(localStorage.getItem("name"));
          }
        }
    }, [])

    useEffect(()=>{
        if(foodItemId != undefined || foodItemId != null){
            const dish = foodItems.filter((val,id)=>{
                return id === foodItemId;
            })
            console.log(dish[0])
            if(dish && dish.length > 0){
                setFoodItem(dish[0])
            }
        }
    },[foodItemId])

    const handleClose = () => {
        setSnackbarState({...snackbar,open:false,message:""});
    };

    const handleClick = (val)=>{
        // console.log(val);
        if (typeof window !== "undefined") {
            const item = JSON.parse(localStorage.getItem("name")) || [];
            console.log(item)
            let a = item.includes(val.name);
            if(a == true || item.length === 0){
                item.unshift(val.name);
                setCartItems(item);
                localStorage.setItem("name",JSON.stringify(item));
                setSnackbarState({...snackbar,open:true,message:`${val.name} ${foodItem.name} has been successfully added to the cart`});
            }
            else{
                setSnackbarState({...snackbar,open:true,message:"You can only order from 1 restaurant at a time"});
            }
        }
    }

    const handleClickRemove = (val)=>{
        // console.log(val);
        if (typeof window !== "undefined") {
            const item = JSON.parse(localStorage.getItem("name")) || [];
            if(item.length === 0){
                setSnackbarState({...snackbar,open:true,message:"Cart is empty"});
            }
            else{
                console.log(item)
                let a = item.indexOf(val.name);
                if(a !== -1){
                    item.splice(a,1);
                    console.log(item)
                    setCartItems(item);
                    localStorage.setItem("name",JSON.stringify(item));
                    setSnackbarState({...snackbar,open:true,message:`${val.name} ${foodItem.name} has been successfully removed from the cart`});
                }
                else{
                    setSnackbarState({...snackbar,open:true,message:"The item selected to be removed is not present in the cart."});
                }
            }
        }
    }
    // console.log(foodItem)
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <img
                        className={styles.img}
                        src={foodItem.img}
                        alt="Food dishes"
                    />
                </div>
                <div className={styles.col2}>
                    <p className={styles.text}>{foodItem.name}</p>
                        <div className={styles.item}>
                            <span className={styles.itemContainer}>
                                <span className={styles.text1}>Name</span>
                                <span className={styles.text1}>Price</span>
                                <span className={styles.text1}>Rating</span>
                                <span className={styles.text1}>Add/Remove from the cart</span>
                            </span>
                            {foodItem && foodItem.restaurant? foodItem.restaurant.map((val,i)=>{
                            return (
                                <span className={styles.itemContainer2} key={i}>
                                    <span className={styles.text2}>{val.name}</span>
                                    <span className={styles.text2}>Rs {val.price}</span>
                                    <span className={styles.text2}>{val.rating}/5</span>
                                    <IconButton sx={{border:"2px solid gray",borderRadius:"5px",mr:1}} variant = "outlined" value = {val} onClick={()=>handleClick(val)}>
                                        <AddIcon></AddIcon>
                                    </IconButton>
                                    <IconButton sx={{border:"2px solid gray",borderRadius:"5px"}} variant = "outlined" value = {val} onClick={()=>handleClickRemove(val)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <Snackbar  open={snackbar.open} anchorOrigin = {{vertical:'top',horizontal:"center"}}  autoHideDuration={5000} onClose={handleClose} >
                                        <Alert severity="success" sx={{ width: "100%"}}>
                                            {snackbar.message}
                                        </Alert>
                                    </Snackbar>
                                </span>
                            )}) : null
                        }
                        </div>
                </div>
            </div>
        </div>
    )
}