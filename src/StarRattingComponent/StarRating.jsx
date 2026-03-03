import React, { useState } from 'react'
import Stars from './Stars'

const containerStyle = {
    display:"flex",
    alignItems:"center",
    gap:"16px"
}

const starContainerStyle = {
    display:"flex",
    gap:"4px"
}

const StarRating = ({length=5}) => {
    const [rating,setRating]=useState(1)

    const handleStarRating = (rating)=>{
        setRating(rating)
    }
  return (
    <div style={containerStyle}>
        <div style={starContainerStyle}>

        {Array.from({length:length},(_,i)=>(<Stars key={i}  onRate={()=>handleStarRating(i+1)} full={rating>=i+1} />))}
        </div>
        <p className='textStyle'> {rating || ""}</p>
    </div>
  )
}

export default StarRating