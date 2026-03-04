import React, { useState } from 'react'
import Stars from './Stars'
import PropTypes from "prop-types"

const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px"
}

const starContainerStyle = {
    display: "flex",
    gap: "4px"
}



const StarRating = ({ length = 5,message=[] ,color="#fcc419",size=48, className="",setMovieRating}) => {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const textStyle = {
    lineHeight:"1px",
    margin:0,
    color,
    fontSize:`${size/1.5}px`
}

    const handleStarRating = (rating) => {
        setRating(rating)
        setMovieRating(rating)
    }

    const handleHoverIn= (tempRating)=>{
        setTempRating(tempRating)
    }

    const handleHoverOut = (tempRating)=>{
        setTempRating(tempRating)
    }
    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>

                {/* {Array.from({ length: length }, (_, i) => (<Stars key={i} onRate={() => handleStarRating(i + 1)} full={rating >= i + 1} onHoverIn={()=>setTempRating(i + 1)} onHoverOut={()=>setTempRating(0)} />))} */}
                {Array.from({length:length},(_,i)=>(<Stars key={i}  onRate={()=>handleStarRating(i+1)} full={tempRating?tempRating>=i+1:rating>=i+1} 
                 onHoverIn = {()=>handleHoverIn(i+1)} 
                 onHoverOut={()=>handleHoverOut(0)} color={color} size={size} />))}
            </div>

            <p style={textStyle}> {message.length==length?message[tempRating?tempRating-1:rating-1] : tempRating||rating || ""}</p>
                       {/* <p style={textStyle}> {message.length>0?message[tempRating?tempRating-1:rating-1] : tempRating||rating || ""}</p> */}
        </div>
    )
}

StarRating.propTypes = {
  length: PropTypes.number,
  message: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  setMovieRating:PropTypes.func,
};
export default StarRating