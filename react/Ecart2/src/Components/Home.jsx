import React from 'react'
import productData from "../Data.js"
import Card from './Card.jsx';

const Home = () => {

  
  return (
    <div className=' flex justify-around flex-wrap bg-black  '>
      {
        productData.map((obj  )=> {
            return <Card productObj={obj}></Card>
        })
      }
    </div>
  )
}

export default Home
