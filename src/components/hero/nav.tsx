import { useState, useEffect } from "react";
import Link from "next/link";
import React from 'react';
// import '../styles/Navbar.css';

export default function NavBar  ()  {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

 

  return (
   <>

        <nav className="   what w-full bg-black shadow border-2 border-black sticky top-0 ">
          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
            <div>
              <div className="flex items-center  md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                
                  </button>
                </div>
                <div className=" win flex items-center gap-2" onClick={() => setNavbar(!navbar)} >
               <div className=" ">
                  <h2 className="tell">ABOUT</h2>
                 </div>
                <div  onClick={() => setNavbar(!navbar)} >
                  <h2 className="  man text-lg md:text-2xl font-bold text-white"   >Menu</h2>
                  {navbar ? (
                    <svg  className=" sign" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.75 13.125L10 6.875L16.25 13.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  ) : (
                    <svg className="sign" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  )}
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1  pb-4 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="
    
">
                <li className=" texx  justify-content  gap-4px">
                   <Link
                      href="https://www.nitj.ac.in/events_registration/hackmol/login"
                      
                    > <button onClick={() => console.log('connect')}>
                      SCHEDULE
                      </button>
                    </Link>
                    
                 
                </li>
                  <li className="texx2">
                    <Link
                      href='#rules'
                      scroll={false}
                    >
                     PRIZES
                    </Link>
                  </li>
                   <li className="texx3">
                    <Link
                      href={'#schedule'}
                      scroll={false}
                    >
                     RULES
                    </Link>
                  </li>  
                   <li className="texx4">
                    <Link
                      href={'#prizes'}
                      scroll={false}
                    >
                     TRACKS
                    </Link>
                  </li> 

                  <li className="texx5">
                    <Link
                      href={'#contact'}
                      scroll={false}
                    >
                      JUDGES
                    </Link>
                  </li>
                  <li className="texx6">
                    <Link
                      href={'#contact'}
                      scroll={false}
                    >
                      FAQS
                    </Link>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          {navbar && (
            <div className="md:hidden ">
                 <div className=" wish px-2 pt-2 pb-3 space-y-1 sm:px">
                    <div className=" heaven display-flex width- 1160px padding- 40px 60px flex-direction: column justify-content: center align-items: center gap-4px">
                 <div className="hell">
                    <Link
                      href="https://www.nitj.ac.in/events_registration/hackmol/login"
                      
                    > <button onClick={() => console.log('connect')}>
                      About
                      </button>
                    </Link>
                    </div>
                <div className=" hell text-black hover:bg-white hover:text-black rounded-lg p-2t ">
                 <Link
                      href="https://www.nitj.ac.in/events_registration/hackmol/login"
                      
                    > <button onClick={() => console.log('connect')}>
                      Schedule
                      </button>
                    </Link>
                    
                 </div>
               
                  <div className="hell">
                    <Link
                      href='#rules'
                      scroll={false}
                    >
                     Prizes
                    </Link>
                  </div>
                   <div className="hell">
                    <Link
                      href={'#schedule'}
                      scroll={false}
                    >
                     Rules
                    </Link>
                  </div>  
                   <div className="hell">
                    <Link
                      href={'#prizes'}
                      scroll={false}
                    >
                     Tracks
                    </Link>
                  </div> 

                  <div className="hell">
                    <Link
                      href={'#contact'}
                      scroll={false}
                    >
                      Judges
                    </Link>
                  </div>
                  <div className="hell">
                    <Link
                      href={'#contact'}
                      scroll={false}
                    >
                      FAQS
                    </Link>
                  </div>
                  </div>
                 </div>
            </div>
          )}
        </nav>
      <hr className="no"/>
      
      <hr className="yes"/>
    
    </>
  )
}

