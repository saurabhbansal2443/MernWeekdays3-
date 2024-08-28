import React from 'react'

// This is a higher order component 

const AddedCartCard = (Component) => {
  return (props)=>{
    return (
        <div className='relative'>
            <div className=" bg-orange-500 rounded-2xl    absolute z-30 text-black p-3 font-bold left-8 top-5 "> Added to cart </div>
            <Component {...props} ></Component>
        </div>
    )
  }

 
}

export default AddedCartCard
