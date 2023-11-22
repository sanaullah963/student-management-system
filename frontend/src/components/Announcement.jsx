'use client'
import React, { useState } from 'react'
import Container from './Container'
import PageHeadding from './PageHeadding'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Announcement() {
  const [show, setShow]=useState(true)
  return (
    <Container className={'mb-10'}>
      <PageHeadding headding={'notice bord'}/>
      <div className="max-w-[700px] bg-gray-100 mx-auto px-2 py-6">
        {/* item */}
        <div className="bg-zinc-300 rounded-md my-3">
          <div className="w-full bg-sky-300 px-5 py-3 capitalize flex items-center justify-between rounded-t-md">
            <h2 className="text-xl font-semibold">notice headding</h2>
            <span className='text-3xl cursor-pointer' onClick={()=>(
              show?setShow(false):(
                setShow(true)
                
              )
            )}>{show?<IoIosArrowDown/>:<IoIosArrowUp/>}</span>
            
          </div>
          {
            show && (<p className='p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, alias. Sapiente, tempore dolore necessitatibus soluta a mollitia, libero tenetur ad laborum commodi, fugit earum unde odio quibusdam? Quia, aut a earum iste officia assumenda nam odio officiis tenetur veritatis nihil, obcaecati accusamus maxime quidem dolorem, sint porro placeat minima corporis ratione blanditiis est ad. At saepe, architecto odio quos, dolorem nisi assumenda magnam iusto dolores mollitia corporis, alias rerum? Molestiae odit laboriosam quisquam porro, delectus sapiente hic, rerum explicabo dolorem maiores minima nobis, incidunt officia debitis rem doloribus? Ratione, exercitationem?</p>)
          }
          <div className='p-4 text-end'>13.10.2023</div>
        </div>
      </div>
    </Container>
  )
}

export default Announcement