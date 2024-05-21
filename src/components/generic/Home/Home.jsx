import React from 'react'
import Carousel from './carousel/Carousel'
import HomeCards from '../../Cards/HomeCards'
import Cart from '../../cart/Cart'

function Home({addToCart}) {
  return (
    <>
  {/* <div>
  <Carousel/>
  </div> */}
  <div className='mt-20'>
    <HomeCards addToCart={addToCart}/>
  </div>

  

  
</>
  )
}

export default Home