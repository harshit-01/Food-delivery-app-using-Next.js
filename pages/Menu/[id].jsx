import {useState,useEffect} from 'react'
import styles from '../../styles/menu.module.scss';
import { foodItems } from "../../data.js"

export default function Item(){
    console.log(foodItems,foodItems[0].name,foodItems[0].restaurant[0].name)
    return (
        <div>

        </div>
    )
}