import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from '../../styles/dashboard_cards.module.scss';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Link from 'next/link'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Plans(){
    return(
        <Box sx={{ flexGrow: 1 , m :5, borderRadius:"15px"}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12 }}>
                {Array.from(Array(3)).map((_, index) => (
                <Grid xs={4} sm={4} md={4} key={index}>
                    { index == 0 ?
                    <Item sx={{ width: "100%"}}  className={styles.box}>
                        <Typography mt={2} variant="h4" sx={{fontWeight:"bold" ,fontStyle:"oblique"}} className={styles.blueText}> Free Subscription </Typography>
                        <Divider />
                        <Typography mt={4} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Free delivery on first app order. </Typography>
                        <Typography mt={2} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Max 5 instant grocery deliveries. </Typography>
                        <Typography mt={2} variant="h6" sx={{color:"floralwhite",fontStyle:"italic"}}> Extra discounts on selected restaurants only.</Typography>
                        <Typography mt={2} variant="h6" sx={{color:"floralwhite",fontStyle:"italic"}}> Upto 10 % of on dining out. </Typography>
                        {/* <Typography mt={4} variant="body2" sx={{color:"floralwhite",fontStyle:"italic"}}> Free delivery on first app order </Typography> */}
                        <Typography mt={3} mb={2} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> 
                            Free 
                            <Chip label="Free" color="error" sx={{mx:2}}/>
                            {/* onClick={handleClick}  */}
                         </Typography>
                        </Item> 
                        : index == 1 ?
                            <Item sx={{ width: "100%"}}  className={styles.box2}>
                            <Typography mt={2} variant="h4" sx={{fontWeight:"bold" ,fontStyle:"oblique"}} className={styles.blueText}> Individual Subscription </Typography>
                            <Divider />
                            <Typography mt={4} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Free delivery on all app order. </Typography>
                            <Typography mt={2} variant="h6" sx={{ fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Extra <strong>20% discounts</strong> on <em style={{textDecoration:"line-through"}}>selected</em> <strong>all</strong> restaurants and items.</Typography>
                            <Typography mt={2} variant="h6" sx={{color:"floralwhite",fontStyle:"italic"}}> Upto 20 % off on dining out. </Typography>
                            {/* <Typography mt={4} variant="body2" sx={{color:"floralwhite",fontStyle:"italic"}}> Free delivery on first app order </Typography> */}
                            <Typography mt={5} mb={2} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Rs 300 for 3 months <Chip label="Paid" color="success" sx={{mx:2}}/></Typography>
                            <Button variant="outlined">
                                <Link href="/Payment/Individual">
                                    Buy
                                </Link>
                            </Button>
                        </Item> : <Item sx={{ width: "100%"}}  className={styles.box3}>
                            <Typography mt={2} variant="h4" sx={{fontWeight:"bold" ,fontStyle:"oblique"}} className={styles.blueText}> Family Subscription </Typography>
                            <Divider />
                            <Typography mt={4} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Free delivery on all app order. </Typography>
                            <Typography mt={2} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Extra <strong>30% discounts</strong> on <em style={{textDecoration:"line-through"}}>selected</em> <strong>all</strong> restaurants and items.</Typography>
                            <Typography mt={2} variant="h6" sx={{color:"floralwhite",fontStyle:"italic"}}> Upto <em>40 % off</em> on dining out. </Typography>
                            {/* <Typography mt={4} variant="body2" sx={{color:"floralwhite",fontStyle:"italic"}}> Delivery Free on first app order </Typography> */}
                            <Typography mt={5} mb={2} variant="h6" sx={{fontWeight:"bold",color:"floralwhite",fontStyle:"italic"}}> Rs 400 for 3 months <Chip label="Paid" color="success" sx={{mx:2}}/></Typography>
                            <Button variant="outlined">
                                <Link href="/Payment/Family">
                                    Buy
                                </Link>
                            </Button>
                        </Item>
                    }
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}
