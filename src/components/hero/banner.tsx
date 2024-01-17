import Script from 'next/script'
import Head from 'next/head'
import React from 'react';
import Link from 'next/link';

 export default function Banner2() {
    return (
        <>
            <Script src="https://apply.devfolio.co/v2/sdk.js" defer async></Script>
            <div className=" woow w-full bg-black shadow border-2 border-black sticky top-0 margin- 10px
      padding- 40px h-full

 ">
       <div className="gdsc ">
        <h4>GDSC</h4>
       
        <div className="nit  
 ">
 
        <h6 >NIT </h6>
        <h6 className='jal'>JALANDHAR</h6>
       </div>
       </div>
      
            <div className=" flex justify-center w-full">
                
                    
                   
                    
                    
                  {/*     <img className="w-10/12 sm:w-8/12 md:w-10/12" src={Hackmol.src} alt="banner" />*/}
                    
                      
                  </div>
                  </div>
                  </>       
              
           
        
    )
}
