import React from 'react'
import Product from './Product'
import Title from './Title'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'

const NewProducts = () => {
  const { products } = useGlobalContext()
  // console.log(products)
  let items = products.filter((product) => product.type === 'new')
  // console.log(items)

  const { addCart } = useGlobalContext()

  return (
    <section>
      <Title title='heading' featured='New Product' />
      <div className='product'>
        {items.map((product) => {
          return (
            <Product
              key={product.id}
              card='card'
              img='imgContainer'
              {...product}
              info='infoBox'
              title='title'
              value='price'
            >
              <div className='rating'>
                <FaStar className='rating-star' />
                <FaStar className='rating-star' />
                <FaStar className='rating-star' />
                <FaStar className='rating-star' />
                <FaStar className='rating-star' />
              </div>

              <div className='buttonGroup'>
                <Link
                  to={`/Items/${product.model}`}
                  style={{ textDecoration: 'none' }}
                >
                  <button className='buy'>Buy Now</button>
                </Link>
                <button className='addCard' onClick={() => addCart(product)}>
                  Add To Card
                </button>
              </div>
            </Product>
          )
        })}
      </div>
    </section>
  )
}

export default NewProducts
