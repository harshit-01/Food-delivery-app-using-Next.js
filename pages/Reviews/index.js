import { useState } from "react";
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

export default function Review(){
    const [formVal,setFormVal] = useState([
        {
            appReview:"Great user interface, easy to access and order food",
            restaurantReview:"Mcd - Great combo offers",
            rating:4.2
        }
    ]);
    const [val, setVal] = useState(0);
    const handleClick = (e)=>{
        e.preventDefault();
        var formEl = document.forms.ReviewForm;
        var formData = new FormData(formEl);
        var appReview = formData.get('app_review');
        var restaurantReview = formData.get('restaurant_review');
        var rating = val;
        setFormVal([...formVal,{
            appReview:appReview,
            restaurantReview:restaurantReview,
            rating:rating
        }]);

        console.log(formVal,rating,restaurantReview,appReview);
    }
    console.log(formVal);
    return(
        <>
            <div className={styles.container_review}>
                <form action="" method="post" id="ReviewForm">
                    <label htmlFor="app_review" className={styles.label}>App review</label><br />
                    <textarea className={styles.textarea} id="app_review" name="app_review" placeholder="Please give a review."></textarea><br />
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
                    <List sx={{ width: '100%', bgcolor: 'b9b8b8' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            { 
                                i%2 == 0 ? <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ bgcolor: deepOrange[500] }}/> : 
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ bgcolor: deepPurple[500] }}/>
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
                                    <em>Reviewed By : Jack</em> 
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
        </>
    )
}