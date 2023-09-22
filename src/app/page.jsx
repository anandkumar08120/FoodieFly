import Featured from '../component/Slider/Featured'
import Image from 'next/image'
import styles from './page.module.css'
import PizzaList from '../component/Pizza list/PizzaList'

export default async function Home() {

  const pizzaList= await getdata();
  // console.log(pizzaList)
  

  return (

    <div className={styles.contianer}>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/> 
    </div>
  )
}

async function getdata(){

  const res=await fetch("http://localhost:3000/api/products");

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json();

}

