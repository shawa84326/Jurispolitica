import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Unlock unparalleled legal<br className='sm:block hidden'/> efficiency with AI</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience legal optimization at its finest,
        Discover the future of legal assistance.
        Redefine your approach to law with our AI companion,
        empowering your legal journey with cutting-edge technology
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
