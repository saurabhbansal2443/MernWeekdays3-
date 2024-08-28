import React from 'react'
import { useEffect } from 'react'

const Profile = () => {

  useEffect(() => { 
    let count = 0 ;
    let id = setInterval(() => {
      count++;
      console.log( count );
    } , 1000 )

    return ()=>{  // cleanUP function 
      clearInterval( id ) 
    }
  } ,[]) 
  return (
    <div>
      Profile Component 
    </div>
  )
}

export default Profile
