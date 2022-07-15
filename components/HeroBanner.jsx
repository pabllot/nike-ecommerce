import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ HeroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h1> &nbsp; JUST DO IT &nbsp; </h1>
        <h2>Become a member</h2>
        <h3>Never Pay for shipping</h3>
        <h3> Join the community. </h3> 
        <h3>Sign up for free.</h3>
        
        
        <img src={urlFor(HeroBanner.image)} alt="sneakers" className='hero-banner-image' />
      </div>
    </div>
  )
}

export default HeroBanner