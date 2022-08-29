import React, { useState ,useEffect } from "react";
import styles from '../../styles/dashboard_cards.module.scss';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange, deepPurple } from '@mui/material/colors';
import  Rating  from "../../components/Ratings.jsx"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getCookie,hasCookie } from 'cookies-next';
import axios from 'axios'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Review(){
    const [formVal,setFormVal] = useState([]);
    const [val, setVal] = useState(3);
    const [open, setOpen] = React.useState({
        val:false,
        message:""
    });
    useEffect(() =>{
        handler();
    },[])
    // if(formVal.length === 0){
    //     formVal.push({
    //         appReview:"Great user interface, easy to access and order food",
    //         restaurantReview:"Mcd - Great combo offers",
    //         rating:4.2
    //     })
    // }
    const handler = async()=>{
        let token = "";
        if(hasCookie){
            token = getCookie('token')
        }
        let id = localStorage.getItem("id")
        axios.get('/api/Reviews',{
            headers: {'Authorization': token}
        })
        .then((res)=>{
            if(res.data.message === "success"){
                if(formVal.length === 0){
                    formVal.push({
                        appReview:"Great user interface, easy to access and order food",
                        restaurantReview:"Mcd - Great combo offers",
                        rating:4.2
                    })
                }
                if(res?.data?.review.length > 0 && res.data.review[0]?.newReview)
                // setFormVal(res.data.review[0]?.newReview);
                setFormVal([...res.data.review[0]?.newReview].reverse())
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    const [severity, setSeverity] = React.useState('success')
    const handleClick = (e)=>{
        e.preventDefault();
        var formEl = document.forms.ReviewForm;
        var formData = new FormData(formEl);
        var appReview = formData.get('app_review');
        console.log(appReview.length)
        var restaurantReview = formData.get('restaurant_review');
        var rating = val;
        if(appReview?.length > 0 && restaurantReview?.length > 0){
            let token = "";
            if(hasCookie){
                token = getCookie('token')
            }
            let id = localStorage.getItem("id")
            axios.post('/api/Reviews',{appReview,restaurantReview,rating,token,id})
            .then((res)=>{
                // debugger;
                if(res.data.message === "success"){
                    handleSnackBar('success');
                    handler();
                }
            })
            .catch((error)=>{
                handleSnackBar('error');
                console.log(error);
            });
        }
        else{
            handleSnackBar('warning');
        }
        console.log(formVal,rating,restaurantReview,appReview);
    }
    const handleSnackBar = (val) => {
        if(val === 'success'){
            setOpen({...open,val:true,message: 'User review saved successfully.'});
        }
        else if(val === 'warning'){
            setOpen({...open,val:true,message: 'Please fill all the fields of the form.'});
        }
        else{
            setOpen({...open,val:true,message: 'Internal Server Issue: Please try again later.'});
        }
        setSeverity(val)
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setOpen({...open,val:false,message: ''});
    };
    console.log(formVal);
    return(
        <>
            <div className={styles.container_review}>
                <form action="" method="post" id="ReviewForm">
                    <label htmlFor="app_review" className={styles.label}>App review</label><br />
                    <textarea className={styles.textarea} id="app_review" name="app_review" placeholder="Please give a review." required></textarea><br />
                    <label htmlFor="restaurant_review" className={styles.label}>Any Restaurant Review</label><br />
                    <textarea className={styles.textarea} id="restaurant_review" name="restaurant_review" placeholder="Please mention the name of the restaturant followed by a give a review in then next line."></textarea><br/>
                    <label htmlFor="rating" className={styles.label}>Rating (between 1 and 5):</label><br/>
                    {/* <input type="number" id="rating" name="rating" min="1" max="5" step="0.01" className={styles.input}></input><br /> */}
                    <Rating val ={val} setVal={setVal}/>
                    <Button type="submit" variant="outlined" color="success" sx={{m:2}} onClick={(e)=>{
                        handleClick(e);
                    }}>Submit</Button>
                </form>
            </div>
            <div className={styles.reviews}>
                {
                    formVal?.map((val,i)=>{
                    return (
                    <List key={i} sx={{ width: '100%', bgcolor: 'b9b8b8' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            { 
                                i%2 == 0 ? <Avatar alt={val?.username?val.username:"Ben"} src="/static/images/avatar/1.jpg" sx={{ bgcolor: deepOrange[500] }}/> : 
                                <Avatar alt={val?.username? val.username:"Ben"} src="/static/images/avatar/1.jpg" sx={{ bgcolor: deepPurple[500] }}/>
                            }
                            </ListItemAvatar>
                            <ListItemText
                            
                            primary={
                                <Typography sx={{ display: 'inline',fontSize: '20',fontWeight: 'bold' }}>
                                App Review : 
                                {" "}
                                    <strong>
                                        {val.appReview?.length != "" ? val.appReview : "NA"}
                                    </strong>
                                </Typography>
                                }
                            secondary={
                                <>
                                <Typography
                                    sx={{ display: 'inline',fontSize: '20',fontWeight: 'bold' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Res. review: 
                                    <span style={{ marginLeft:"15px",fontSize: '12',fontWeight: 'normal'}}>
                                       {val.restaurantReview?.length > 0 ? val.restaurantReview: "NA"}
                                    </span>
                                </Typography>
                                <br></br>
                                    <>
                                        Rating : {val?.rating !== null ? 
                                        <>
                                            {console.log("hello",val.rating)}
                                            {val.rating} 
                                            <i style={{color:"#FFDF00",fontSize:15}}>&#9733;</i> (out of 5  <i style={{color:"#FFDF00"}}>&#9733;</i> )
                                        </>
                                        : "NA"}
                                    </>
                                    
                                    <br />
                                    <em>Reviewed By : {val?.username}</em> 
                                </>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                    </List>
                    )
                })
            }
            </div>
            <Snackbar open={open.val} autoHideDuration={3000} onClose={handleClose} 
            anchorOrigin={{ vertical:"top", horizontal:'right' }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {open.message}
                </Alert>
            </Snackbar>
        </>
    )
}