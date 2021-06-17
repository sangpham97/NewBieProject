import React from 'react'
import { useGlobalContext } from './context'
import Title from './Title'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function NewArrival() {
  const { products } = useGlobalContext()

  let items = products.filter((product) => product.type === 'arrival')

  return (
    <section className='arrival' id='arrival'>
      <Title title='heading' featured='New Arrival' />
      <div className='box-container'>
        {items.map((item) => {
          return (
            <Link
              to={`/Items/${item.model}`}
              style={{ textDecoration: 'none' }}
              key={item.id}
            >
              <Product
                card='box'
                {...item}
                img='img'
                info='info'
                title='product-name'
                value='price'
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
