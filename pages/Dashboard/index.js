import styles from '../../styles/dashboard.module.scss';
import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardCards from '../../components/DashboardCards'
import Tooltip from '@mui/material/Tooltip';

export default function dashboard(){
    const [isActive,setIsActive] = useState(0);
    const handleClick = (val)=>{
        setIsActive(val);
    }
    return(
        <>
            <div className = {styles.container}>
                <ul className={styles.vertical_navbar}>
                    <li onClick={()=>handleClick(0)}>
                        <Tooltip title="Home" placement="right" arrow sx={{ fontSize:100 }}>
                            <a className={isActive === 0 ? styles.active:""} href="/"><HomeIcon sx={{ color: pink[500], mr:2}} />
                            </a>
                        </Tooltip>
                    </li>
                    <li onClick={()=>handleClick(1)}>
                        <Tooltip title="News" placement="right"arrow >
                            <a className={isActive === 1 ? styles.active:""} href="/News"><NewspaperIcon sx={{mr:2}}></NewspaperIcon>
                            </a>
                        </Tooltip>
                        </li>
                    <li onClick={()=>handleClick(2)}>
                        <Tooltip title="Helpline" placement="right" arrow>
                            <a className={isActive === 2 ? styles.active:""} href="/Dashboard/helpline"><HelpCenterIcon color= "primary" sx={{mr:2}}></HelpCenterIcon>
                            </a>
                        </Tooltip>
                    </li>
                    <li onClick={()=>handleClick(3)}>
                        <Tooltip title="Profile" placement="right" arrow>
                            <a className={isActive === 3 ? styles.active:""} href="/Profile"><AccountBoxIcon color= "success" sx={{mr:2}}></AccountBoxIcon>
                            </a>
                        </Tooltip>
                    </li>
                </ul>
                <div>
                    <DashboardCards ></DashboardCards>
                </div>
            </div>
        </>
    )
}