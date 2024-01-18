import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const marqueee = () => {
  return (
    <div className='bg-black text-white py-2 relative z-10 '>
      <div className=''>
        <Marquee
          play={true}
          pauseOnHover={true}
          onFinish={() => null}
          speed={150}
          direction='left'
          className='overflow-hidden'
          gradient={false}>
          {Array(5, 5, 5, 5, 5, 5).map((data, i) => {
            return (
              <div key={i} className='flex justify-center items-center text-black font-Minecraft font-bold space-x-12 px-6'>
                <div className='lg:text-[20px] md:text-[15px] sm:text-[5px] font-bold py-4'>
                  Let’s Hack it!
                </div >
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHTSURBVHgB7ZbPSwJBFMe/9rsgkA0hCgpiuxdRHrpFh04G2aWOdgiPBdWlQ/0/denUv6CBadbJRdQsBFMXjUyhtn2TRWHqm8FO+oFlmR/vve97M7szQJdOxwE1rHb564Ec1sa23wqEY8gVK78e6qOxJuL+REaxCKzPTDWdZMRTcM/Nsn1zBbCCq4hgLYFd2obBtdGBuj6aSzYcOBVomj0JyJeqdf3cKrAEPGZLGBwcgAyVShUTrtGWMVhL8FJ+hSxcG5aAXN5EwSyCC80lGw59nEnjLg2ZbF44HdOcGBkeqlsSKjll/RWYbNolwLF3cGwdHe6LBgXIMYxsG2Hb0jl4WMmHnKgCB8p+enKsrQLYImSCEzJngaNW1qZwS68iALFQRmzCRtAYzflX6MQzUln6O4rHPgnFm/pqp6EUrM/wJ5RhOHD73b6PpT/fSCtlr3IhoWzrfjRUfn3KJe1TugKEz7OGZe8OdF0XbcMwsLW+AhVkb0SCrGniORFCf9VE8upSBL+LhKGCkgCX097t8QSCgSCC1zci+KbXAxWUloAqsLowj0X3ErShdxH87PwCKvRCntMns3CiOTWUK2+IRiO2oDJ2/T4ak97Uqtdywmqjry4dzAeSYtoa5M/boQAAAABJRU5ErkJggg==" alt=""
                  width={32}
                  height={32}
                />
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default marqueee