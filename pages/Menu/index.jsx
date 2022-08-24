import {useState,useEffect} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '../../styles/menu.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { foodItems } from "../../data.js"
import {useRouter} from 'next/router';

export default function Menu(){
    const router = useRouter();
    const handleClick = (e)=>{

    }
    const openItem = (id)=>{
        router.push(`/Menu/${id}`);
    }
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 12,lg:12 }} sx={{
                m:4
            }}>
                {foodItems.map((val, index) => {
                let x = val.name.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                let a = val.img[val.name];
                console.log(val.id,val.name,x,a?.src);
                return (
                <Grid xs={2} sm={4} md={3} lg={3} key={val.id} >
                    <Card sx={{ maxWidth: 225,cursor:"pointer" }} onClick={(e)=>{openItem(val.id)}}>
                        <CardMedia
                            component="img"
                            height="170"
                            image={a && a.src ? a.src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAu1bqip99lKWluZil7SW5nT-q6ovGZcGVw&usqp=CAU"}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom sx={{fontSize:"18px",fontWeight:"bold"}} component="div">
                            {x}
                            </Typography>
                            <Typography sx={{fontSize:"14px",fontWeight:"bold"}}  color="text.secondary">
                            {val.type}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <IconButton color="primary" aria-label="Add to cart" sx={{margin:"auto"}} onClick={handleClick}>
                            <Tooltip title={`Add ${x} to Cart`} arrow placement="right">
                                <AddCircleIcon />
                            </Tooltip>
                        </IconButton>

                        </CardActions>
                    </Card>
                </Grid>
                )})}
            </Grid>
        </Box>
    )
}

