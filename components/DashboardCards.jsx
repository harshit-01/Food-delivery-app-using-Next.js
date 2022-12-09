import styles from '../styles/dashboard_cards.module.scss';
import{ useState} from "react";
import { Line,Pie } from "react-chartjs-2";
import PhoneIcon from '@mui/icons-material/Phone';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
ChartJS.register( 
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

const arr = {
        // "year": 2022,
        "Jan": 2000, 
        "Feb": 2300, 
        "Mar" : 2000, 
        "Apr" :2500, 
        "May": 3000, 
        "Jun" : 20000, 
        "Jul" : 4000, 
        "Aug" : 3400, 
        "Sep" : 5000, 
        "Oct" : 2000, 
        "Nov" : 24000, 
        "Dec" : 26140
}

const style = {
        width: '100%',
        maxWidth: 360,
        // bgcolor: 'background.paper',
    };
      
//https://jsonplaceholder.typicode.com/users
export default function DashboardCards(){
    const [data,setData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New users registered every month',
            data: Object.values(arr),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    });

    const [val,setVal] = useState({
        labels: ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri','Sat'],
        datasets: [
          {
            label: 'Traffic on site on weekdays and weekends',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    });
    const percentage = 66;
    return (
        <>
            <div className = {styles.container}>
                <div className= {styles.row}>
                    <div className={styles.col}>
                        <Line data={data}></Line>
                    </div>
                    <div className={styles.subcontainer}>
                        <div className={styles.col_right_down}>
                            <p style={{textAlign: 'center',fontWeight: 'bold',color: 'white',fontSize:18}}>Repeat customers</p>
                            <div style={{ width: 140, height: 140,margin:"auto"}}>
                                <CircularProgressbar value={percentage} text={`${percentage}%`}
                                className={styles.CircularProgressbar_text}
                                styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      // Path color
                                      stroke: 'rgb(27, 118, 160)',
                                    //   stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Customize transition animation
                                      transition: 'stroke-dashoffset 0.5s ease 0s',
                                      // Rotate the path
                                      transform: `rotate(${percentage}turn)`,
                                      transformOrigin: 'center center',
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                      // Trail color
                                      stroke:"lightgray",
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      transform: `rotate(0.25turn)`,
                                      // Rotate the trail
                                      transformOrigin: 'center center',
                                    },
                                    // Customize the text
                                    text: {
                                      // Text color
                                      fill: 'floralwhite',
                                      // Text size
                                      fontSize: '16px',
                                    },
                                    // Customize background - only used when the `background` prop is true
                                    background: {
                                      fill: '#3e98c7',
                                    },
                                  }}
                        />
                            </div>
                        </div>
                        <div className={styles.col_right_down}>
                            <p className={styles.top_res}>Top Restaurants</p>
                            <div className={styles.para}>
                                <p><i style={{color:"#FFDF00"}}>&#9733;</i> {" "}SamosaWala (4.92/5.0)</p>
                                <p><i style={{color:"#FFDF00"}}>&#9733;</i> {" "}DosaWala (4.90/5.0)</p>
                            </div>
                        </div>
                        <div className={styles.col_right_up}>
                            <div>
                                <p> Daily food deliveries</p>
                                <span style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}><DeliveryDiningIcon size="large" color="primary"/> <p style={{paddingLeft:"10px"}}> 25000 </p></span>
                            </div>
                        </div>
                        <div className={styles.col_right_up}>
                            <div>
                                <p> Query resolved daily</p>
                                <span style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}> <PhoneIcon size="large" color="primary"/> <p style={{paddingLeft:"10px"}}>2500</p> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= {styles.row2}>
                    <div className={styles.col2_left}>
                        <p style={{textAlign: 'center',fontWeight: 'bold',marginBottom:"25px"}}>Traffic on site</p>
                        <Pie data={val} />
                    </div>
                    <div className={styles.col2_left}>
                        <p style={{textAlign: 'center',fontWeight: 'bold'}}>Top recommendation</p>
                        <div className={styles.top_recommendation}>
                        <List sx={style} component="nav" aria-label="mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Masala Dosa from Sagar Ratna" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="Samosa from Halidram" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Chilli Potato from Regency" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Peri Peri Fries from MCD" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Snacks and groceries from FoodieMart" />
                            </ListItem>
                        </List>
                           
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.sales}>
                            <p className={styles.avg_sales}>Average sales this month</p>
                            <p>
                                <i style={{color:"#FFDF00"}}>&#9733;</i> {" "}
                                Rs 150 crores collectively in New Delhi, Banglore, Mumbai and Chennai.
                            </p>
                            <p>
                                <i style={{color:"#FFDF00"}}>&#9733;</i>{" "}
                                Rs 100 crores in other outlets.
                            </p>
                            <p className={styles.avg_sales}>About us</p>
                            <p>
                                <i style={{color:"#FFDF00"}}>&#9733;</i>{" "}
                                The company was founded in 2022 by Harshit Kashyap.
                            </p>
                            <p>
                                <i style={{color:"#FFDF00"}}>&#9733;</i>{" "}
                                ForFoodie is 4 times National Startup award winner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}