import React from 'react'
import { useGlobalContext } from './context'
import { MdClose } from 'react-icons/md'
export default function CartMenu() {
  const {
    addCart,
    removeCart,
    cartItems,
    IsOpenCart,
    closeCart,
  } = useGlobalContext()
  const itemPrices = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemPrices * 0.14
  const TotalPrice = itemPrices + taxPrice

  return (
    <div className={IsOpenCart ? 'cart-container show' : 'cart-container'}>
      <MdClose className='cart-icon' onClick={closeCart} />
      <h3 className='cart-heading'>Cart Items</h3>
      <div>{cartItems.length === 0 && <h3>Cart is Empty</h3>}</div>
      <div className='cart-content'>
        {cartItems.map((item) => {
          const { model, qty, price } = item
          return (
            <div className='cart-center'>
              <div className='cart-info'>
                <h3 className='cart-item-name'>{model}</h3>
                <h4 className='cart-item-qty'>Quanity:{qty}</h4>
                <h4 className='item-price'>{qty * price}</h4>
              </div>
              <div className='button-container'>
                <button className='cart-btn' onClick={() => addCart(item)}>
                  +
                </button>
                <button className='cart-btn' onClick={() => removeCart(item)}>
                  -
                </button>
              </div>
            </div>
          )
        })}
        {cartItems.length !== 0 && (
          <div>
            <h3 className='price'>Price Item: ${itemPrices.toFixed(2)}</h3>
            <h3 className='tax'>Tax Price: ${taxPrice.toFixed(2)}</h3>
            <h3 className='total'>Total: ${TotalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
