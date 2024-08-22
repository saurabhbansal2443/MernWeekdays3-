import React, {useState } from 'react'

const Comment = ({review}) => {
    const { rating , comment , reviewerName  } = review; 

    let [open , setOpen ] = useState(false);
     let handleToggle = ()=>{
        setOpen(!open)
     }
  return (
    <div className='my-2 '>
      <div className='w-3/4 mx-auto  h-10 bg-gray-400 text-black flex justify-around  items-center text-2xl '> <span>{reviewerName} </span> <span onClick={handleToggle}> 🔼</span></div>
     {open == true ?  <div className='w-3/4 mx-auto  h-10 bg-gray-500 text-black flex justify-around  items-center text-2xl '> <span> {comment} </span>  <span> {rating} </span></div> : <></>}
    </div>
  )
}

export default Comment
