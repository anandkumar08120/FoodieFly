import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID.THE FoodieFly PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTURANTS</h1>
          <p className={styles.text}>
            10/1201 Connaught Place,
            <br />New Delhi,81009
            <br />(602) 867-1010
          </p>
          <p className={styles.text}>
            TS/120 Bandra,
            <br />Mumbai,81541
            <br />(610) 867-1234
          </p>
          <p className={styles.text}>
            PS/69 Main chowk,
            <br />Ranchi,83009
            <br />(615) 867-1810
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 - 23:59
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer