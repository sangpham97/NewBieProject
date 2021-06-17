import React from 'react'

export default function Letter() {
  return (
    <section className='news'>
      <h1>News Letter</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <form action>
        <input type='email' placeholder='Enter Email' />
        <input type='submit' className='btn' />
      </form>
    </section>
  )
}
