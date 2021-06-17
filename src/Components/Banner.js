import React from 'react'

export default function Banner({
  banner,
  title,
  subtitle,
  text,
  children,
  img,
}) {
  return (
    <div className={banner}>
      <div className='left'>
        <img src={img} alt='image' />
      </div>
      <div className='right'>
        <p id='title'>{title}</p>
        <h1>{subtitle}</h1>
        <p id='details'>{text}</p>
        {children}
      </div>
    </div>
  )
}
