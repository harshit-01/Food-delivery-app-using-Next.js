import {useState,useEffect} from 'react'
import styles from '../../styles/profile.module.scss'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import Dosa from "../../public/dosa.jpg"
import Pizza from "../../public/pizza.jpg"
import Fries from "../../public/fries.jpg"
import Vegetables from "../../public/Vegetables.jpg"
import DalRoti from "../../public/dalRoti.jpeg"
import FastDelivery from "../../public/fast_delivery1.png"
import FastDelivery3 from "../../public/fast_delivery3.png"
import FastDelivery5 from "../../public/fast_delivery5.jpg"
import FastDelivery6 from "../../public/fast_delivery6.png"
import BurgerCard from "../../public/burger_card.jpeg"
import illustration from "../../public/illustration.jpg"
import MouthWateringEmoji from "../../public/mouth_watering_emoji.jpg"
import Chinese from "../../public/chinese.jpg"
import Taco from "../../public/tacos.jpg"
import PunjabiTadka from "../../public/punjabi_tadka.jpg"
import Sweets from "../../public/sweets.webp"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { style } from '@mui/system';
import FileBase64 from 'react-file-base64';
import defaultPic from "../../public/defaultPic.png"

export default function profile(){
    const [pic,setPic] = useState("");
    const [image,setImage] = useState("");
    // const uploadImage = (e)=>{
    //     debugger;

    // }
    useEffect(() => {
        // Perform localStorage action
        if(localStorage.getItem("image")){
            document.getElementById("imagePreview").setAttribute("src", localStorage.getItem("image"))
        }
    }, [])
    // if (typeof window !== 'undefined') {
    //     if(localStorage.getItem("image")){
    //         document.getElementById("imagePreview").setAttribute("src", localStorage.getItem("image"))
    //     }
    // }
    console.log(image.length)
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.row1}>
                    <div className={styles.profilePic}>
                        { pic.length === 0 ?
                            <PersonIcon color="primary" sx={{ fontSize: {xs:40,md:60}
                            }}/>:
                            <Image
                            src={""}
                            height={400}
                            alt="Picture of the author"
                            layout="responsive"
                        />
                        }
                    </div>
                    <div className={styles.userDetails}>
                        <div className={styles.userData}>
                            <h3>UserDetails</h3>
                            <p>
                                <strong style={{color:"rgb(14, 104, 182)"}}>Name</strong> <br/>Harshit Kashyap</p>
                            <p>
                                <strong style={{color:"rgb(14, 104, 182)"}}>Phone No.</strong> <br/> XXXXXXXXXX</p>
                            <p>
                                <strong style={{color:"rgb(14, 104, 182)"}}>Address</strong> <br/>ABCD</p>
                            <p>
                                <strong style={{color:"rgb(14, 104, 182)"}}>Email</strong><br/>ABCDEFGHIJKL@gmail.com
                            </p>
                            <p>
                                <strong style={{color:"rgb(14, 104, 182)"}}>Password</strong><br/>ABCDEFGHIJKL@gmail.com
                            </p>
                            <p><strong style={{color:"rgb(14, 104, 182)"}}>Subscription Type</strong>
                                <br/><br/>
                                {/* <span className={styles.subscriptionTypeGreen}>Free</span> */}
                                <span className={styles.subscriptionTypeRed}>Paid</span>
                                {/* <span className={styles.subscriptionTypeBlue}>Family</span> */}
                                <span className={styles.subscriptionTypePurple}>Individual</span>
                            </p>
                            
                        </div>
                        <Button variant="outlined" color="primary" startIcon={<UpdateIcon />}
                            sx = {{mt:2,ml:{xs:1,lg:2},minWidth:{xs:"25%",md:"90%"},color:"black",fontWeight:"bold"}} className={styles.updateDetails}>
                                Update Details
                        </Button>
                    </div>
                    <div style={{width:"90%",height:"90%",margin:"auto"}}>
                        <img src = "https://i.gifer.com/TwuB.gif" style={{width:"100%",height:"60%",margin:"auto"}}></img>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div style={{display: "flex",justifyContent: "center",alignItems:"center"}}>
                        <h2>
                            Welcome to the world of <span style={{color:"rgb(124, 33, 33)",fontWeight:"bold"}}>Foodies</span>!
                        </h2>
                        <img 
                            src="https://media.giphy.com/media/QBLNiIgnL0CgGfBQ5L/giphy.gif"
                            width={125}
                            height={100}
                            alt="Mouth Watering Emoji"
                            // layout="responsive"
                            >
                        </img>
                    </div>
                    <h3 style={{width:"100%",marginLeft:"14px",color:"rgb(14, 104, 182)",fontStyle:"italic"}}><span style={{color:"rgb(124, 33, 33)",fontWeight:"bold"}}>ForFoodie</span> is the one stop destination to all your cravings!</h3>
                    <div className={styles.col}>
                        <p style={{width:"100%",marginLeft:"14px",color:"black",fontSize:"20px",fontWeight:"bold"}}>Food Recomendations :-</p>
                        <div>
                        <div className={styles.foodContainers}>
                            <p className={styles.category}>South Indian</p>
                            <Image 
                            src={Dosa}
                            width={80}
                            height={70}
                            alt="Dosa"
                            >
                            </Image>
                        </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>Italian</p>
                                <Image 
                                src={Pizza}
                                width={80}
                                height={70}
                                alt="Pizza"
                                >
                                </Image>
                            </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>French</p>
                                <Image 
                                src={Fries}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            {/* <div className={styles.foodContainers}>
                                <p>Vegetables</p>
                                <Image 
                                src={Vegetables}
                                width={70}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div> */}
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>North Indian</p>
                                <Image 
                                src={DalRoti}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>Chinese</p>
                                <Image 
                                src={Chinese}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>Mexican</p>
                                <Image 
                                src={Taco}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>Punjabi Tadka</p>
                                <Image 
                                src={PunjabiTadka}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            <div className={styles.foodContainers}>
                                <p className={styles.category}>Sweets</p>
                                <Image 
                                src={Sweets}
                                width={80}
                                height={70}
                                alt="Mouth Watering Emoji"
                                >
                                </Image>
                            </div>
                            {/* <div className={styles.pics2} style={{height:"240px",marginTop:"20px"}}>
                                <Image src = {FastDelivery6} 
                                width={250}
                                height={200}
                                >
                                </Image>
                            </div>
                            <div className={styles.pics3} style={{height:"240px",marginTop:"20px"}}>
                                <Image src = {FastDelivery6} 
                                width={250}
                                height={220}
                                >
                                </Image>
                                <Image src = {FastDelivery3} 
                                width={250}
                                height={220}
                                >
                                </Image>
                            </div> */}
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.side_card}>
                                <Image src = {BurgerCard} 
                                    width="320px"
                                    height={160}
                                >
                                </Image>
                                <div className={styles.upload}>
                                    <p>Add Display Picture</p>
                                    <div>
                                        {image.length == 0  ? <img src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png"></img>:<img src ={image} id="imagePreview" />}
                                    </div>
                                    <FileBase64 type="file" multiple={false} onDone={({base64}) => {
                                        setImage(base64)}
                                    } />
                                    <Button variant="contained" component="label" startIcon={<PhotoCamera  />} sx={{mb:"auto",mt:1}} onClick={(e)=>{uploadImage(e)}}>
                                        Save image
                                        {/* <input hidden accept="image/*" multiple type="file" id="uploadImage"/> */}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pics} style={{width:"800px",height:"350px",margin:"auto"}}>
                            <Image src = {FastDelivery} 
                                width={750}
                                height={335}
                            >
                            </Image>
                            {/* <Image src = {FastDelivery5} 
                                width={400}
                                height={225}
                            >
                            </Image> */}
                        </div>
                    </div>
                </div>
                {/* <div className={styles.row3}></div> */}
            </div>
        </div>
    )
}