import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'
import Image from '../image/2.png'
import Banner from '../Components/Banner'
import ProductContainer from '../Components/ProductContainer'

export default function ItemPage() {
  return (
    <>
      <Hero hero='header-2'>
        <Banner
          banner='container'
          title='Our Products'
          subtitle='Best Shop'
          text=' Lorem ipsum dolor sit amet consectetur adipisicing elit
          Possimus rerum sit rem atque ab quasi repellat officia
          Possimus rerum sit rem atque ab quasi repellat officia.'
          img={Image}
        >
          <Link to='/' className='btn1'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <ProductContainer />
    </>
  )
}
