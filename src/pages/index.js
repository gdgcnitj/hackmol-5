// import Script from 'next/script'
import Image from 'next/image'
'use client'
import { useState,useEffect,SetStateAction } from 'react'

import Banner2 from '@/components/banner'
import Hackmol from   '@/components/img'
import Register from  '@/components/reg'
import Log from '@/components/logo'
import NavBar from '@/components/nav'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
   <Banner2/>
<div className="six">
<Log/>
</div>
<div className='five'>
<Hackmol/>
</div>
<div className="seven">
<div className='hidden sm:flex items-center justify-center md:justify-start'>
                           
                           
                           <Link
                               target='_blank'
                               rel='noreferrer'
                               href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                               <button
                                   
                                   onClick={() => console.log('connect')} >
                                  <h3 className="mol">Register</h3>
                                  <Register/>
                               </button>
                           </Link>
                       </div>
</div>

<NavBar/>
    </div>
  );
}
