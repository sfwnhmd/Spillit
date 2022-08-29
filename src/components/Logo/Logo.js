import React from 'react'
import Logos from '../../images/spill.svg'

function Logo() {
  return (
    <div class='flex flex-col md:pt-8 sm:justify-center items-center md:py-18 pb-12'>
      <img src={Logos} alt='Spillit'/>
    </div>
  )
}

export default Logo