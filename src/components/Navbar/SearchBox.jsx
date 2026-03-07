import React, { useEffect, useRef, useState } from 'react'
import { useKey } from '../../customHook/useKey'

const SearchBox = ({ query, setQuery }) => {

  const handleSearchQuery = (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }


  // you can access the dom element using thhe useEffect hook but this is not the recommended approch to access the dom element
  // the recommended approach will be using the useRef react hook that will persist the state accross the re-rended ,using the 
  // useRef , the ui will not re-render becausee it persist the state 
  // useEffect(()=>{
  //   const el = document.querySelector(".search");
  //   el.focus();
  // },[query])

  // recommonded approach
  const inputEl = useRef(null);

  // useEffect(()=>{

  //   function callBack(e){
  //     if(document.activeElement==inputEl.current)return;
  //     if(e.key=="Enter"){
  //       inputEl.current.focus();
  //       setQuery("")
  //     }
  //     }

  //     document.addEventListener("keydown",callBack);
  //    return function(){

  //       document.removeEventListener("keydown",callBack);
  //    }
  // },[setQuery])


  // instead of using the separatly we have made the custom hook to perform the login and reuse the logic
  useKey("Enter", function () {
    if (document.activeElement == inputEl.current) return;
    inputEl.current.focus();
    setQuery("")

  })

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleSearchQuery}
      ref={inputEl}
    />


  )
}

export default SearchBox