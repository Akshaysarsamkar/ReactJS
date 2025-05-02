import React, { useRef } from 'react'

const Reference = () => {

    let inputRef = useRef()

    console.log(inputRef)

let changeInput = () =>{
    inputRef.current.placeholder = "Enter Your name"
    inputRef.current.focus()
    inputRef.current.style.background = "yellow"
    inputRef.current.style.padding = "10px"
    
} 
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={changeInput}>Change</button>
    </>
  )
}

export default Reference

