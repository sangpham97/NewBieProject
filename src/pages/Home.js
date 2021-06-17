import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import imageGirl from '../image/2.png'
import NewProducts from '../Components/NewProducts'
import NewArrival from '../Components/NewArrival'
import Latest from '../Components/Latest'
import Letter from '../Components/Letter'
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          banner='container'
          title='Online Store'
          subtitle='Best Shop'
          text=' Lorem ipsum dolor sit amet consectetur adipisicing elit
          Possimus rerum sit rem atque ab quasi repellat officia
          Possimus rerum sit rem atque ab quasi repellat officia.'
          img={imageGirl}
        >
          <Link to='/' className='btn1'>
            Join us
          </Link>
        </Banner>
      </Hero>
      <NewProducts />
      <NewArrival />
      <Latest />
      <Letter />
    </>
  )
}

Hero.defaultProps = {
  hero: 'header',
}
