import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../Components/context'
import StyledHero from '../Components/StyledHero'

export default function SingleItem() {
  const { model } = useParams()
  const { products } = useGlobalContext()
  console.log(products)

  return (
    <div className='single-item-container'>
      {products
        .filter((product) => product.model === model)
        .map((item, index) => {
          const { id, model, price, image, description } = item
          return (
            <div key={id}>
              <StyledHero image={image}>
                <Link
                  to='/Items'
                  className='btn1'
                  style={{ backgroundColor: '#2233' }}
                >
                  <h1>Back to Products</h1>
                </Link>
              </StyledHero>
              <div className='item-info'>
                <h1 className='item-name'>{model}</h1>
                <h2 className='price'>${price}</h2>
                <button
                  className='btn1'
                  style={{ backgroundColor: 'rgb(87,24,69)' }}
                >
                  Buy Now
                </button>
                <p className='text'>{description}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
