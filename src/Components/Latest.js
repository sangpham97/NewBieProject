import React from 'react'
import { useGlobalContext } from './context'
import Title from './Title'
import { FaStar } from 'react-icons/fa'
import Product from './Product'
import { Link } from 'react-router-dom'
export default function Latest() {
  const { products } = useGlobalContext()

  let items = products.filter((product) => product.type === 'latest')
  return (
    <section className='section new_latast' id='new_latast'>
      <Title title='heading' featured='Latest Product' />
      <div className='latast containers'>
        <div className='latast_center'>
          {items.map((item) => {
            return (
              <Product
                key={item.id}
                card='latest'
                img='img_containers'
                title='title'
                info='latast_bottom'
                {...item}
                value='price'
              >
                <div className='latast_rating'>
                  <FaStar className='rating-star' />
                  <FaStar className='rating-star' />
                  <FaStar className='rating-star' />
                  <FaStar className='rating-star' />
                  <FaStar className='rating-star' />
                </div>
                <Link to={`/Items/${item.id}`}>Add To Card</Link>
              </Product>
            )
          })}
        </div>
      </div>
    </section>
  )
}
