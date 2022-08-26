import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useRouter } from 'next/router';
// import { ComponentToPrint } from './ComponentToPrint';
// import dynamic from 'next/dynamic'


export default function Cart() {
    const router = useRouter();
    const [billContent,setBillContent] = React.useState([]);
    React.useEffect(() => {
        // Perform localStorage action
        if (typeof window !== "undefined") {
          if(localStorage.getItem("name")){
            setBillContent(JSON.parse(localStorage.getItem("name")));
          }
        }
    }, [])
    const componentRef = React.useRef();
    const TAX_RATE = 0.10;
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }
    function ccyFormatTotal(num) {
        let a = num.toFixed(2)- 50;
        if(a<0){
            a=0;
        }
        localStorage.setItem("TotalPayment",JSON.stringify(a))
        
        return a;
    }

    function priceRow(qty, unit) {
        return qty * unit;
    }

    function createRow(desc, qty=1, unit = 200) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }
    let rows = [];
    console.log(billContent.length)
    if(billContent?.length > 0) {
        let a = [];
        a= billContent.reduce((arr,cnt)=>{
            return arr[cnt.dish] =  ++arr[cnt.dish] || 1,arr
        },[])
        let temp = [];
        for (let i=0;i<billContent?.length;i++){
            let g=0;
            for(let j=0;j<temp?.length;j++){
                if(temp[j]?.dish == billContent[i].dish){
                    g=1;
                    break;
                }
            }
            if(g==0){
                temp.push(billContent[i]);
            }
        }
        temp.map((val)=>{
            // debugger;
            let c = val.dish;
            rows.push(createRow(val.dish, a[c],val.price));
         })
    }

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    return (
    <div style={{margin:"auto",marginTop:"30px",width:"80%",height:"105vh"}} ref={componentRef}>
        <p style={{textAlign:"center",fontSize:"24px",fontWeight:"bold",color:"rgb(27, 118, 160)"}}>Invoice</p>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700,border:"1px solid gray" }} aria-label="spanning table">
            <TableHead>
            <TableRow sx={{backgroundColor:"rgb(214, 214, 214)"}}>
                <TableCell align="center" colSpan={3} sx={{ fontWeight:"bold",fontSize:"16px"}}>
                Details
                </TableCell>
                <TableCell align="right" sx={{ fontWeight:"bold",fontSize:"16px"}}>Price</TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ fontWeight:"bold",fontSize:"14px"}}>Desc</TableCell>
                <TableCell align="right" sx={{ fontWeight:"bold",fontSize:"14px"}}>Qty.</TableCell>
                <TableCell align="right" sx={{ fontWeight:"bold",fontSize:"14px"}}>Price</TableCell>
                <TableCell align="right" sx={{ fontWeight:"bold",fontSize:"14px"}}>Sum</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
            ))}

            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2} sx={{ fontWeight:"bold",fontSize:"14px"}}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ fontWeight:"bold",fontSize:"14px"}}>Taxes</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2} sx={{ fontWeight:"bold",fontSize:"14px"}}>Subscription Discount</TableCell>
                <TableCell align="right">50</TableCell>
            </TableRow>
            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2} sx={{ fontWeight:"bold",fontSize:"16px"}}>Total</TableCell>
                <TableCell align="right" sx={{ fontWeight:"bold",fontSize:"16px"}}>Rs {ccyFormatTotal(invoiceTotal)}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <small>*Taxes include GST and delivery charges.</small><br/>
        <small>*While printing invoice please select landscape mode.</small><br/>
        <div style={{width:"100%",textAlign: 'right'}}>
            <Link href="javascript:window.print()">
                <Button variant="outlined" color="warning" sx={{mt:2,mb:2,fontSize:"14px"}}>
                    Download Invoice
                </Button>
            </Link>
            <Link href="/Payment/Order">
                <Button variant="outlined" sx={{mt:2,mb:2,ml:2,fontSize:"14px"}}>
                        Order
                </Button>
            </Link>
        </div>
    </div>
  );
}
