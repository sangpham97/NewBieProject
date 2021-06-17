import React from 'react'
import { useGlobalContext } from './context'
import FilterItems from './FilterItems'

export default function ProductContainer() {
  const {
    ProductFIlter,
    addCart,
    types,
    filterItem,
    Price1to3,
    Price4to6,
    Price7to8,
    Price9,
  } = useGlobalContext()
  return (
    <FilterItems
      ProductFIlter={ProductFIlter}
      addCart={addCart}
      types={types}
      filterItem={filterItem}
      Price1to3={Price1to3}
      Price4to6={Price4to6}
      Price7to8={Price7to8}
      Price9={Price9}
    />
  )
}
