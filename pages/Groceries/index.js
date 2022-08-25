import ComingSoon from "../../public/ComingSoon.webp"
import Image from 'next/image'

export default function Grocery(){
    return (
        <div style = {{display: "flex",justifyContent: "center", alignItems: "center" ,margin:"20px"}}>
            <Image src = {ComingSoon} width= "550" height="450" ></Image>
        </div>
    )
}