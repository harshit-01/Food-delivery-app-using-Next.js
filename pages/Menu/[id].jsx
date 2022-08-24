import {useState,useEffect} from 'react'
import styles from '../../styles/menu.module.scss';
import { foodItems } from "../../data.js"
import {useRouter} from 'next/router';

export default function Item(){
    const router = useRouter();
    console.log(parseInt(router.query.id))
    const x = parseInt(router.query.id);
    // console.log(foodItems,foodItems[0].name,foodItems[0].restaurant[0].name)
    const [foodItem,setFoodItem] = useState({});
    const [foodItemId,setFoodItemId] = useState(null);
    useEffect(()=>{
        if(x != undefined || x!= null){
            setFoodItemId(parseInt(router.query.id));
        }
    },[x])
    useEffect(()=>{
        if(foodItemId != undefined || foodItemId != null){
            const dish = foodItems.filter((val,id)=>{
                return id === foodItemId;
            })
            // console.log(dish)
            if(dish && dish.length > 0){
                setFoodItem(dish)
            }
        }
    },[foodItemId])
    return (
        <div>
            
        </div>
    )
}