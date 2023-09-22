
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import {notFound} from "next/navigation"
import SingleProduct from '../SingleProduct';


async function getdata(id){

    const res= await fetch(`http://localhost:3000/api/products/${id}`,{cache : 'no-store'});
  
    if(!res.ok){
        return notFound();
    }
    return res.json();
  
}

async function Product({params}) {

    const pizza=await getdata(params.id);
    return(
        <SingleProduct pizza={pizza} />
    )
    

    
}

export default Product