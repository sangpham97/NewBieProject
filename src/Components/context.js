import React, { useState, useContext } from 'react'
import Items from './data'
const allTypes = ['all', ...new Set(Items.map((item) => item.type))]

const ProductContext = React.createContext()
const ProductProvider = ({ children }) => {
  const [loading, SetLoading] = useState(false)
  const [products, SetProducts] = useState(Items)
  const [amount, setAmount] = useState(0)
  // const [temItems, setTempItems] = useState([])
  const [types, setType] = useState(allTypes)
  const [ProductFIlter, setProductFilter] = useState(Items)
  const [cartItems, setCartItems] = useState([])
  const [IsOpenCart, setIsOpenCart] = useState(false)
  //chon item từ ngoài nếu item đó trùng với item trong gio thì giữ nguyen item đó và tăng qty len 1 neu ko thi giu nguyen,nguoc lai neu cartItem chua trong gio setItemCart cho nó vào giỏ
  const addCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
    setAmount(amount + 1)
  }
  const removeCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
    setAmount(amount - 1)
  }

  // console.log(products)

  //filterItem
  const filterItem = (type) => {
    if (type === 'all') {
      setProductFilter(Items)
      return
    }
    const newItems = Items.filter((product) => product.type === type)
    setProductFilter(newItems)
    return
  }

  //filterPrice
  const Price1to3 = () => {
    let tempItems = Items.filter((item) => item.price <= 300)
    setProductFilter(tempItems)
  }
  const Price4to6 = () => {
    let tempItems = Items.filter(
      (item) => item.price > 300 && item.price <= 600
    )
    setProductFilter(tempItems)
  }
  const Price7to8 = () => {
    let tempItems = Items.filter(
      (item) => item.price > 600 && item.price <= 800
    )
    setProductFilter(tempItems)
  }
  const Price9 = () => {
    let tempItems = Items.filter(
      (item) => item.price > 800 && item.price <= 900
    )
    setProductFilter(tempItems)
  }

  const openCart = () => {
    setIsOpenCart(true)
  }
  const closeCart = () => {
    setIsOpenCart(false)
  }

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        amount,
        addCart,
        filterItem,
        types,
        ProductFIlter,
        Price1to3,
        Price4to6,
        Price7to8,
        Price9,
        removeCart,
        cartItems,
        IsOpenCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(ProductContext)
}

export { ProductContext, ProductProvider }
