import React from 'react'

const NumberResult = ({movies}) => {
  return (
    <div>
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
    </div>
  )
}

export default NumberResult