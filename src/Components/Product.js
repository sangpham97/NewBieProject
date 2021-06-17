import React from 'react'

export default function Product({
  card,
  id,
  model,
  price,
  img,
  image,
  info,
  title,
  value,
  children,
}) {
  return (
    <div className={card} key={id}>
      <div className={img}>
        <img src={image} alt='image' />
      </div>
      <div className={info}>
        <div className={title}>{model}</div>
        <div className={value}>${price}</div>
        {children}
      </div>
    </div>
  )
}
