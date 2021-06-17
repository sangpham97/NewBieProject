import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from './context'
export default function Navbar() {
  const state = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/About',
      name: 'About',
    },
    {
      id: 3,
      link: '/Services',
      name: 'Services',
    },
    {
      id: 4,
      link: '/Client',
      name: 'Client',
    },
    {
      id: 5,
      link: '/Items',
      name: 'Our Work',
    },
    {
      id: 6,
      link: 'Contact',
      name: 'Contact',
    },
  ]

  const { amount, openCart } = useGlobalContext()

  return (
    <nav>
      <div className='logo'>
        <span id='blue'>
          <Link to='/' className='logo-item'>
            STORE
          </Link>
        </span>
      </div>
      <ul className='menu'>
        {state.map((item) => {
          const { id, name, link } = item
          return (
            <li key={id} className='menu-item'>
              <Link to={link} className='menu-link'>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='cart-item' onClick={openCart}>
        <FaShoppingCart className='cart-icon' />
        <div className='amount-container'>
          <p className='total-amount'>{amount}</p>
        </div>
      </div>
    </nav>
  )
}
