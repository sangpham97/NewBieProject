import React from 'react'
import Product from './Product'
import { FaStar } from 'react-icons/fa'
import Title from './Title'
import { Link } from 'react-router-dom'

export default function filterItems({
  ProductFIlter,
  addCart,
  filterItem,
  types,
  Price1to3,
  Price4to6,
  Price7to8,
  Price9,
}) {
  return (
    <>
      <div className='btn-container'>
        {types.map((type, index) => {
          return (
            <button
              type='button'
              className='filter-btn'
              key={index}
              onClick={() => filterItem(type)}
            >
              {type}
            </button>
          )
        })}
        {/* {filter Price} */}
        <button type='button' className='filter-btn' onClick={Price1to3}>
          $100-$300
        </button>
        <button type='button' className='filter-btn' onClick={Price4to6}>
          $400-$600
        </button>
        <button type='button' className='filter-btn' onClick={Price7to8}>
          $700-$800
        </button>
        <button type='button' className='filter-btn' onClick={Price9}>
          $900
        </button>
      </div>
      {/* {End of filter Price} */}
      <section>
        <Title title='heading' featured='Our Products' />
        <div className='product'>
          {ProductFIlter.map((product) => {
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
    </>
  )
}
