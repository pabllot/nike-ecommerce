import React from 'react'
import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 NIKE FAKE ECOMMERCE. All rights reserved</p>
      <p className='icons'>
      <Link href='https://github.com/pabllot'>
        <button className='social-m btn'>
           < AiOutlineGithub />
        </button>
      </Link>
      <Link href='https://www.instagram.com/inglescompablot/'>
      <button className='social-m btn'>
           < AiFillInstagram />
        </button>
      </Link>
      <Link href='https://www.linkedin.com/in/pablo-teixeira-466497238/'>
      <button className='social-m btn'>
           < AiFillLinkedin />
        </button>
      </Link>
      </p>
      <Link href='/'>
        <button type='button' className='btn' id='backto'> Back home </button>
      </Link>
    </div>
  )
}

export default Footer